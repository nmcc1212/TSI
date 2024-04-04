cd next/news-aggregation 
npm run dev &
sleep 1
pid_web=$!
cd ../..

cd newAPI/src
ts-node index.ts &
sleep 1
pid_api=$!

echo $pid_web > .pidfile
echo $pid_api >> .pidfile

