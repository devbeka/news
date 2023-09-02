import { useEffect, useState } from 'react'
import { getCategories, getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner'
import NewsList from '../../components/NewsList'
import Skeleton from '../../components/Skeleton'
import Pogination from '../../components/Pogination'
import './styles.scss'
import Categories from '../../components/Categories'

const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSize = 15

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
      })
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      setCategories(['All', ...response.categories])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory])

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
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
