import React, { useRef } from 'react'
import './styles.scss'

const Slider = ({ children }) => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 150
  }
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 150
  }

  return (
    <div className="slider">
      <button onClick={scrollLeft} className="slider__arrow">
        {'<'}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className="slider__arrow">
        {'>'}
      </button>
    </div>
  )
}

export default Slider
