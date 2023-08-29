import NewsItem from '../NewsItem'
import './styles.scss'

const NewsList = ({ news }) => {
  return (
    <ul className="list">
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default NewsList
