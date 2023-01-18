import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";



async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news)


  return (
    <div>page</div>
  )
}

export default HomePage

