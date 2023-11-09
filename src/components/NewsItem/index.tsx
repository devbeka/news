import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'
import './styles.scss'

interface Props {
  item: INews
}

const NewsItem = ({ item }: Props) => {
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
