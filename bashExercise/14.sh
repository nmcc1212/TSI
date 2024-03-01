# Display the names of any file-system which have less than 10% free space available

df -h | awk '$5 ~ /([0-9][0-9]?)%/ {print $1, $5}' | while read -r filesystem freespace ; do
    if [ ${freespace%?} -lt 10 ]; then
        echo "File system $filesystem has less than 10% free space: $freespace"
    fi
done