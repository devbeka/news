import React, { useRef } from 'react'
import './styles.scss'

interface Props {
  children: React.ReactElement
}

const Slider = ({ children }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null)

  const scrollLeft = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft -= 150
  }
  const scrollRight = () => {
    if (!sliderRef.current) return
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
