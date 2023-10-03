

import NewsList from './newsList';

function SlavaUkraine()
{
    return(
        <div>
            <h1>Tech News</h1>
            <NewsList rssFeedUrl="https://www.independent.co.uk/topic/ukraine/rss" />
        </div>
    );
}
export default SlavaUkraine;