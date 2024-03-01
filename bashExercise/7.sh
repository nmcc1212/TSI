time=$(date +%H)
if [ $time -ge 5 -a $time -lt 12 ]; then
    echo "Good morning"
elif [ $time -ge 12 -a $time -lt 13 ]; then
    echo "Good noon"
elif [ $time -ge 13 -a $time -lt 17 ]; then
    echo "Good afternoon"
elif [ $time -ge 17 -a $time -lt 21 ]; then
    echo "Good evening"
elif [ $time -ge 21 -a $time -lt 5 ]; then
    echo "Good night"
else 
    echo "Invalid time"
    exit 1
fi
