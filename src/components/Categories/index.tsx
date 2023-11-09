import { ForwardedRef, forwardRef } from 'react'
import './styles.scss'
import { CategoriesType } from '../../interfaces'

interface Props {
  categories: CategoriesType[]
  setSelectedCategory: (categories: CategoriesType | null) => void
  selectedCategory: CategoriesType | null
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className="category">
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? 'category__active' : 'category__item'}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? 'category__active'
                  : 'category__item'
              }
              key={category}
            >
              {category}
            </button>
          )
        })}
      </div>
    )
  }
)

export default Categories
