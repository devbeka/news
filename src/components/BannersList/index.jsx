import withSkeleton from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../NewsBanner'
import './styles.scss'

const BannersList = ({ banners }) => {
  return (
    <ul className="banners-list">
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner } />
      })}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 12, 'row')

export default BannersListWithSkeleton
