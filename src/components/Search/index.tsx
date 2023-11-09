import './styles.scss'

interface Props {
  keywords: string
  setKeyword: (keywords: string) => void
}

const Search = ({ keywords, setKeyword }: Props) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={keywords}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={'Search news'}
      />
    </div>
  )
}

export default Search
