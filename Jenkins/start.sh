cd next/news-aggregation 
npm run dev &
sleep 1
echo $! >> .pidfile
cd ../..

cd newAPI/src
ts-node index.ts &
sleep 1
echo $! >> .pidfile
