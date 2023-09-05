import './styles.scss'

const Search = ({ keywords, setKeyword }) => {
  return (
    <div className='search'>
      <input
        type="text"
        className='search__input'
        value={keywords}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={'Search news'}
      />
    </div>
  )
}

export default Search
