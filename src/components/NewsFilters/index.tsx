import { getCategories } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import {  IFilters } from '../../interfaces'
import Categories from '../Categories'
import Search from '../Search'
import Slider from '../Slider'
import './styles.scss'

interface Props {
  filters: IFilters
  changeFilter: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
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
