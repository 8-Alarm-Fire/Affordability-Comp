info="Commit: $(date)"
os="$(uname -s)"

echo "commit-bot detects OS: $os"

case $os in

    Darwin)
        cd "`dirname $0`" || exit 1
        ;;

    Linux)
        cd "$(dirname "$(readlink -f "$0")")" || exit 1
        ;;

    CYGWIN*|MINGW32*|MSYS*|MINGW*)
        echo "OS unsupported (submit an issue on GitHub!)"
        ;;

    *)
        echo "OS unsupported (submit an issue on GitHub!)"
        ;;
esac

echo "$info" >> log.txt
echo "$info"
echo

# Ship it
git add output.txt
git commit -m "$info"
git push origin test

cd -