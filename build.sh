#!/bin/bash

# Compile the program
echo "Compiling nob.c..."
cc ./builder/nob.c -o nob
if [ $? -ne 0 ]; then
  echo "Compilation failed!"
  exit $?
fi

# Move the binary to the builder folder
mv -f nob builder/nob

# Clear the screen
clear
echo "Running ./nob..."
sleep 1
clear

# Run the binary from the builder folder
./builder/nob
