import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const query = gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
  myQuery(
    access_key: $access_key
    categories: $categories 
    countries: "us"
    sort: "published_desc"
    keywords: $keywords
    ) {
    data {
      author
      category
      country
      description
      image
      language
      published_at
      source
      title
      url
    }
    pagination {
      count
      limit
      offset
      total
    }
  }
}
`

    const res = await fetch('https://brooklyn.stepzen.net/api/nguyen-news2/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    }
    );

    console.log(
        "LOADING NEW DATA FROM API for category >>>",
        category,
        keywords
    );

    const newsResponse = await res.json();

    const news = sortNewsByImage(newsResponse.data.myQuery)

    return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=d97e471ec774b7b17ab0749153e643f9&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"