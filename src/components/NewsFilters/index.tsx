import { IFilters } from '../../interfaces'
import { useAppDispatch } from '../../store'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import Categories from '../Categories'
import Search from '../Search'
import Slider from '../Slider'
import './styles.scss'

interface Props {
  filters: IFilters
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null)

  const dispatch = useAppDispatch()

  return (
    <header className="news-filters">
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeyword={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </header>
  )
}

export default NewsFilters
