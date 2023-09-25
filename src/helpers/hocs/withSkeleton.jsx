import Skeleton from '../../components/Skeleton'

function withSkeleton(Component, type, count, direction) {
  return function withSkeleton(props) {
    const { isLoading, ...restProps } = props
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }
    return <Component {...restProps} />
  }
}

export default withSkeleton
