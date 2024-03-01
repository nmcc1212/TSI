# Check if at least one directory is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory1> [directory2 ...]"
    exit 1
fi

for directory in "$@"; do
    if [ -d "$directory" ]; then
        echo "Contents of $directory:"
        
        for file in "$directory"/*; do
            if [ -e "$file" ]; then
                echo "${file##*/}"  # Print only the file/directory name, not the full path
            fi
        done
        
        echo 
    else
        echo "$directory is not a directory."
    fi
done
