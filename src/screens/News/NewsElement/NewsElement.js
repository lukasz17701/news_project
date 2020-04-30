import { h } from 'preact'
import './NewsElement.scss'

const NewsElement = ({image, title, date, preamble}) => (
    <div className="element">
        <div className="imageWrapper">
            <img className="imageWrapper__img" src={image} alt={title} />
        </div>
        <div className="description">
            <div className="description__headerGroup">
                <h1 className="description__title">{title}</h1>
                <span className="description__date">{date}</span>
            </div>
            <p className="description__preamble">{preamble}</p>
        </div>
    </div>
)

export default NewsElement
