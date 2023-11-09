import { getNews } from '../../api/apiNews'
import { PAGE_SIZES, TOTAL_PAGES } from '../../constants/constants'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import NewsFilters from '../NewsFilters'
import NewsList from '../NewsList'
import PoginationWrapper from '../PoginationWrapper'
// import { NewsApiResponse, ParamsType } from '../../interfaces'
import './styles.scss'

const NewsByFilters = () => {
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
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1)
    }
  }
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1)
    }
  }
  const handleClickPage = (pageNumber: number) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className="news-by-filters">
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PoginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleClickPage={handleClickPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PoginationWrapper>
    </section>
  )
}

export default NewsByFilters
