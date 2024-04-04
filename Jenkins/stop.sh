if [ -f .pidfile ]; then
    kill $(cat .pidfile)