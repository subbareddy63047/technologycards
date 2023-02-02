// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, imgUrl, description, className} = cardsList
  return (
    <li className={className}>
      <div className="message">
        <h1 className="role">{title}</h1>
        <p className="para">{description}</p>
      </div>
      <div className="img-Container">
        <img src={`${imgUrl}`} className="image" alt={`${title}`} />
      </div>
    </li>
  )
}
export default CardItem
