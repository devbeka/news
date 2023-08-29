import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import './styles.scss'

const NewsItem = ({item}) => {
  return (
    <li className="item">
      <div
        className="item__wrapper"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="item__info">
        <h3 className="item__info-title">{item.title}</h3>
        <p className="item__info-extra">
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}

export default NewsItem
