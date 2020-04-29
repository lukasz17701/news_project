import {h} from 'preact'
import NewsElement from "../NewsElement/NewsElement"

const defaultSortMethod =>

const NewsList = ({news, sortMethod}) => (
    <div>
        {news.map(NewsElement)}
    </div>
)

export default NewsList
