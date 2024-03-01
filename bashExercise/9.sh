passwd=$(cat /etc/passwd)
noComments=$(echo "$passwd" | grep -v '^#')
usernames=$(echo "$noComments" | cut -d: -f1)
longest=$(echo "$usernames" | awk '{print length, $0}' | sort -n -r | head -n 1)
longest=$(echo $longest | cut -d' ' -f2)
shortest=$(echo "$usernames" | awk '{print length, $0}' | sort -n | head -n 1)
shortest=$(echo $shortest | cut -d' ' -f2)

echo "Longest username: $(echo $longest)"
echo "Shortest username: $(echo $shortest)"
