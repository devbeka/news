import './styles.scss'

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category">
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

export default Categories
