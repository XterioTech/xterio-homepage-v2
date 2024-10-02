import { createClient } from '@/prismicio'
const LatestNews = async () => {
  const client = createClient()
  const newsContent = await client.getSingle('latest_news')

  const {title} = newsContent?.data

  return (
    <div className="latest-news">
      <h3 className="latest-news__title">{title}</h3>
    </div>
  )
}
export default LatestNews
