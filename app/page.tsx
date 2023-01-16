import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
type Props = {}

async function HomePage({}: Props) {

    const news: NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>page</div>
  )
}

export default HomePage