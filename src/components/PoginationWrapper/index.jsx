import Pogination from '../Pogination'

const PoginationWrapper = ({ top, bottom, children, ...poginationProps }) => {
  return (
    <>
      {top && <Pogination {...poginationProps} />}
      {children}
      {bottom && <Pogination {...poginationProps} />}
    </>
  )
}

export default PoginationWrapper
