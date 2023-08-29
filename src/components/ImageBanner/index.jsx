import './styles.scss'

const ImageBanner = ({ image }) => {
  return (
    <div className="wrapper">
      {image ? (
        <img src={image} alt="img-banner" className="wrapper__img" />
      ) : null}
    </div>
  )
}

export default ImageBanner
