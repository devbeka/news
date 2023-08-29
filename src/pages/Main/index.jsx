import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner'
import { getNews } from '../../api/apiNews'
import './styles.scss'
import NewsList from '../../components/NewsList'
import Skeleton from '../../components/Skeleton'
import Pogination from '../../components/Pogination'

const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSize = 10

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews(currentPage, pageSize)
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePreviosPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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
      <Pogination
        handleNextPage={handleNextPage}
        handlePreviosPage={handlePreviosPage}
        handleClickPage={handleClickPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  )
}

export default Main
