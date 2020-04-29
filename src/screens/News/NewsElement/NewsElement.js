import { h } from 'preact'

const NewsElement = ({image, title, date, preamble}) => (
    <div>
        <div>
            <img src={image} alt={title} />
        </div>
        <div>
            <h1>{title}</h1>
            <span>{date}</span>
            <p>{preamble}</p>
        </div>
    </div>
)

export default NewsElement
