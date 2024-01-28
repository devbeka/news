import { TOTAL_PAGES } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import NewsFilters from '../NewsFilters'
import NewsList from '../NewsList'
import PoginationWrapper from '../PoginationWrapper'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppDispatch, useAppSelector } from '../../store'
import { setFilters } from '../../store/slices/newsSlice'
import './styles.scss'

const NewsByFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.news.filters)
  const news = useAppSelector((state) => state.news.news)

  const debouncedKeywords = useDebounce(filters.keywords, 1600)

  const {isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      )
    }
  }
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      )
    }
  }
  const handleClickPage = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }))
  }

  return (
    <section className="news-by-filters">
      <NewsFilters filters={filters} />

      <PoginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleClickPage={handleClickPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PoginationWrapper>
    </section>
  )
}

export default NewsByFilters
