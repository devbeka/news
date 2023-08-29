import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner'
import { getNews } from '../../api/apiNews'
import './styles.scss'
import NewsList from '../../components/NewsList'

const Main = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  return (
    <main>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  )
}

export default Main
