echo "Enter a string"
read str
echo "1. Convert to upper case"
echo "2. Convert to lower case"
read choice
case $choice in
    1) echo $str | tr 'a-z' 'A-Z' ;;
    2) echo $str | tr 'A-Z' 'a-z' ;;
    *) echo "Invalid choice" ;;
esac