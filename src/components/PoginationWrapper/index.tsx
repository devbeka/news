import { IPaginationProps } from '../../interfaces'
import Pogination from '../Pogination'

interface Props {
  children: React.ReactNode
  top?: boolean
  bottom?: boolean
}

const PoginationWrapper = ({
  top,
  bottom,
  children,
  ...poginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pogination {...poginationProps} />}
      {children}
      {bottom && <Pogination {...poginationProps} />}
    </>
  )
}

export default PoginationWrapper
