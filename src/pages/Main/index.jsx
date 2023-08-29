import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner'
import { getNews } from '../../api/apiNews'
import './styles.scss'
import NewsList from '../../components/NewsList'
import Skeleton from '../../components/Skeleton'

const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const response = await getNews()
        setNews(response.news)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  return (
    <main>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type="banner" count={1} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type="item" count={10} />
      )}
    </main>
  )
}

export default Main
