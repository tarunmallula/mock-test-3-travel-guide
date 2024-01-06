import './index.css'

const TourItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <li className="list-element">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="heading">{name}</h1>
      <p className="caption">{description}</p>
    </li>
  )
}

export default TourItem
