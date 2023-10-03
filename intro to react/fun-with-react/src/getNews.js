// https://rss-to-json-serverless-api.vercel.app/api?feedURL=

function getNews(feedURL) {
  return fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=${feedURL}`)
    .then(response => response.json())
    .then(json => json.items)
    .catch(error => console.error(error));
}