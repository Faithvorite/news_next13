import {gql } from "graphql-request"
const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
    ) => {
    
    //graphQL query
    const query = gql`
        query MyQuery(
            $access_key: String! 
            $categories: String!
            $keywords: String!
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
              pagination{
                count
                limit
                offset
                total
              }
        }
    }
    `
    //fetch fnction nxt13 caching

    //sort function by images vs no images

    //return res
};

export default fetchNews;
