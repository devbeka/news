import LatestNews from '../../components/LatestNews'
import NewsByFilters from '../../components/NewsByFilters'
import './styles.scss'

const Main = () => {
  return (
    <main className="main">
      <LatestNews />
      <NewsByFilters />
    </main>
  )
}

export default Main
