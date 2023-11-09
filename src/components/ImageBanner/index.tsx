import './styles.scss'

interface Props {
  image: string
}

const ImageBanner = ({ image }: Props) => {
  return (
    <div className="wrapper">
      {image ? (
        <img src={image} alt="img-banner" className="wrapper__img" />
      ) : null}
    </div>
  )
}

export default ImageBanner
