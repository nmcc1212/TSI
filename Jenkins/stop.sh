if [ -f .pidfile ]; then
    for pid in $(cat .pidfile); do
        kill $pid
        echo "Killed $pid"
    done
fi
