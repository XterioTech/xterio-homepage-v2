import { createClient } from '@/prismicio'
import dynamic from "next/dynamic";
const SocialIcons = dynamic(() => import('./social-icons'))

const LatestNews = async () => {
  const client = createClient()
  const newsContent = await client.getSingle('latest_news')

  const {title} = newsContent?.data

  return (
    <div className="latest-news" data-slice-backgroundcolour={"dark"}>
      <div className="latest-news__container">
        <header className="latest-news__header news-header">
          <h3 className="news-header__title">{title}</h3>
          <SocialIcons className="news-header__social" />
        </header>
      </div>
    </div>
  )
}
export default LatestNews
