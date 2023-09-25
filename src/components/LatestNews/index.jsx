import BannersList from '../BannersList'
import './styles.scss'

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className="latest">
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
