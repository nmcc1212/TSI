
echo "Enter the first number: "
read num1
echo "Enter the second number: "
read num2
result=$(echo "$num1 + $num2" | bc)
echo "The sum of the two numbers is: $result"