import { formateDate } from '../../helpers/formateDate'
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Good morning</h1>
      <p className="header__date">{formateDate(new Date())}</p>
    </header>
  )
}

export default Header
