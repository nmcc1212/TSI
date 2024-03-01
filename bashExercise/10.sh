find ~ -name "*.swp"
if [ $? -eq 0 ]; then
    echo "Files found"
    # find ~ -name "*.swp" -exec rm -f {} \;
else
    echo "Files not found"
fi