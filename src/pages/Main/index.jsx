import { getCategories, getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PAGE_SIZES, TOTAL_PAGES } from '../../constants/constants'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import NewsBanner from '../../components/NewsBanner'
import NewsList from '../../components/NewsList'
import Pogination from '../../components/Pogination'
import Categories from '../../components/Categories'
import Search from '../../components/Search'
import './styles.scss'

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZES,
    category: null,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1600)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })

  const { data: dataCategories } = useFetch(getCategories)

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1)
    }
  }
  const handlePreviosPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1)
    }
  }
  const handleClickPage = (pageNumber) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <main>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter('category', category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeyword={(keywords) => changeFilter('keywords', keywords)}
      />
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />
      <NewsList isLoading={isLoading} news={data?.news} />
      <Pogination
        handleNextPage={handleNextPage}
        handlePreviosPage={handlePreviosPage}
        handleClickPage={handleClickPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </main>
  )
}

export default Main
