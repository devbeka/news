import { useGetLatestNewsQuery } from '../../store/services/newsApi'
import BannersList from '../BannersList'
import './styles.scss'

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section className="latest">
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
