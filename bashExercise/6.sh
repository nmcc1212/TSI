if [ $# -lt 1 ]; then
    echo "Usage: $0 <directory_name> [prefix]"
    exit 1
fi

directory="$1"
prefix="$2"

if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' not found."
    exit 1
fi

counter=1

for file in "$directory"/*; do
    if [ -f "$file" ]; then
        if [ -n "$prefix" ]; then
            mv "$file" "$directory/${prefix}_`basename $file`_${counter}"
        else
            mv "$file" "$directory/${counter}.`basename $file`"
        fi
        counter=$((counter+1))
    fi
done
