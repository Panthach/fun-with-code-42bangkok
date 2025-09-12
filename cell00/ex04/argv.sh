if [ $# -eq 0 ]; then
    echo "No arguments supplied"
elif [ $# -gt 3 ]; then
    for arg in "$1" "$2" "$3"; do
        echo "$arg"
    done
else
    for arg in "$@"; do
        echo "$arg"
    done
fi
