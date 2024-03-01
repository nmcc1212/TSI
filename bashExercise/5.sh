echo "Enter the new name of the current working directory"
read newname
mv $PWD $newname
echo "Current working directory renamed to $newname"
echo "New directory name is $PWD"