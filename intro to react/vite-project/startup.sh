#!/bin/bash

# Function to clean up and exit
cleanup() {
    echo "Cleaning up and exiting..."
    
    # Kill background processes
    pkill -P $$
    
    exit 0
}

# Trap Ctrl+C and call cleanup function
trap cleanup INT

# Start background processes
node rss-to-json.js &
node backend.js &
npm run dev -- --host

# Wait for background processes to finish
wait
