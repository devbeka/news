import { IPaginationProps } from '../../interfaces'
import './styles.scss'

const Pogination = ({
  handleNextPage,
  handlePreviousPage,
  handleClickPage,
  currentPage,
  totalPages,
}: IPaginationProps) => {
  return (
    <div className="pogination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className="pogination__arrow"
      >
        {'<'}
      </button>
      <div className="pogination__list">
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handleClickPage(index + 1)}
              className="pogination__list-number"
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className="pogination__arrow"
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pogination
