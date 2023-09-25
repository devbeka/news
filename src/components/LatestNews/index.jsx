import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import BannersList from '../BannersList'
import './styles.scss'

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews)

  return (
    <section className="latest">
      <BannersList banners={data && data?.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
