#!/bin/bash

# Run node scripts in the background
node rss-to-json.js &
pid_rss_to_json=$!

node backend.js &
pid_backend=$!

# Sleep for a while to allow Node.js processes to start
sleep 5

# Curl API
curl -X POST \
  http://localhost:50111/api/fetchNews \
  -H 'Content-Type: application/json' \
  -d '{
    "rssFeedUrls": [
      "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
      "http://rss.slashdot.org/Slashdot/slashdot",
      "http://feeds.arstechnica.com/arstechnica/index/",
      "https://www.reddit.com/r/tech/top/.rss",
      "https://www.reddit.com/r/technews/top/.rss",
      "https://www.reddit.com/r/technology/top/.rss",
      "https://www.independent.co.uk/topic/ukraine/rss",
      "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/news-event/ukraine-russia/rss.xml",
      "https://www.ft.com/war-in-ukraine?format=rss",
      "https://yahoo.com/news/rss/world",
      "https://abcnews.go.com/abcnews/internationalheadlines",
      "http://feeds.bbci.co.uk/news/uk/rss.xml",
      "https://dailymail.co.uk/home/index.rss",
      "https://telegraph.co.uk/rss.xml",
      "https://independent.co.uk/rss",
      "https://standard.co.uk/rss",
      "https://www.aljazeera.com/xml/rss/all.xml",
      "http://feeds.bbci.co.uk/news/world/rss.xml",
      "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
      "https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best",
      "https://feeds.skynews.com/feeds/rss/world.xml",
      "https://www.reddit.com/r/worldnews/top/.rss",
      "https://hnrss.org/frontpage?points=30",
      "http://rss.slashdot.org/Slashdot/slashdot",
      "https://defence-blog.com/topics/uk/feed/",
      "https://www.thinkdefence.co.uk/feed/",
      "https://ukdefencejournal.org.uk/feed/",
      "https://www.gov.uk/government/organisations/ministry-of-defence.atom"
    ]
  }'


# Kill background processes
kill $pid_rss_to_json $pid_backend $pid_dev
