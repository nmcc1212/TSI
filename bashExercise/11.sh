# Generate a random password
PASSWORD=$(LC_ALL=C tr -dc 'a-zA-Z0-9!@#$%^&*()' < /dev/urandom | fold -w 8 | head -n 1)

# Print the password
echo "Generated Password: $PASSWORD"
