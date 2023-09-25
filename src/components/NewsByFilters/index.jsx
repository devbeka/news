import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters'
import NewsList from '../NewsList'
import Pogination from '../Pogination'
import './styles.scss'

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
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
    <section className="news-by-filters">
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      <NewsList isLoading={isLoading} news={news} />
      <Pogination
        handleNextPage={handleNextPage}
        handlePreviosPage={handlePreviosPage}
        handleClickPage={handleClickPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  )
}

export default NewsByFilters
