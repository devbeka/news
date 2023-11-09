import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'
import NewsBanner from '../NewsBanner'
import './styles.scss'

interface Props {
  banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className="banners-list">
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />
      })}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 12, 'row')

export default BannersListWithSkeleton
