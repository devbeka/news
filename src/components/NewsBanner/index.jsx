import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import ImageBanner from '../ImageBanner'
import './styles.scss'

const NewsBanner = ({ item }) => {
  return (
    <div className="banner">
      <ImageBanner image={item?.image} />
      <h3 className="banner__title">{item.title}</h3>
      <p className="banner__extra">
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner
