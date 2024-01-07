import './DogImage.css'

export const DogImage = ({imageUrl}) => {
  return <img className='description-img' src={imageUrl} alt="dog" />
}

export default DogImage
