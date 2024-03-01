if [ $# -eq 0 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

input_file="$1"
output_file="${input_file}.tmp"

sed '/^$/d' "$input_file" > "$output_file"

mv "$output_file" "$input_file"

echo "Empty lines removed from $input_file"
