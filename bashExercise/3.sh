read -p "Enter a number: " number

reverse=""

while [ $number -gt 0 ]; do
    digit=$((number % 10))

    reverse="${reverse}${digit}"

    number=$((number / 10))
done


reverse=$(echo $reverse | sed 's/^0*//')


echo "Reverse order: $reverse"