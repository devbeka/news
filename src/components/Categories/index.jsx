import { forwardRef } from 'react'
import './styles.scss'

const Categories = forwardRef(
  ( { categories, selectedCategory, setSelectedCategory }, ref) => {
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
