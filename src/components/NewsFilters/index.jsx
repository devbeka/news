import { getCategories } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import Categories from '../Categories'
import Search from '../Search'
import Slider from '../Slider'
import './styles.scss'

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories)
  return (
    <header className="news-filters">
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter('category', category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeyword={(keywords) => changeFilter('keywords', keywords)}
      />
    </header>
  )
}

export default NewsFilters
