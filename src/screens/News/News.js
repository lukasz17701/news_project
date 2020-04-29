import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { getFashionNews, getSportsArticles } from "../../services/news"
import {flattenNewsData, getActiveFilters} from "../../dataProcessing/newsProcessing"

import NewsElement from "./NewsElement/NewsElement"

const filterTypes = {
    sports: 'sports',
    fashion: 'fashion',
}

const filtersToRequestMap = {
    sports: getSportsArticles,
    fashion: getFashionNews,
}

const News = () => {
    const [news, setNews] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({ sports: true, fashion: true })

    const clearNews = () => setNews([])
    const setFilterValue = ({checked, key}) => setSelectedFilters({...selectedFilters, [key]: checked})
    const handleFilterChange = ({target: {checked, value}}) => setFilterValue({checked, key: value})

    const getNews = activeFilters => Promise.all(activeFilters.map(filter => filtersToRequestMap[filter]()))
        .then(flattenNewsData)
        .then(setNews)

    useEffect(() => {
        clearNews()
        const activeFilters = getActiveFilters(selectedFilters)
        getNews(activeFilters)
    }, [selectedFilters])

    const newsList = news.length
        ? news.map(NewsElement)
        : "There are no news to display"

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    checked={selectedFilters.sports}
                    value={filterTypes.sports}
                    onChange={handleFilterChange}
                />
                <label>Sports</label>
                <input
                    type="checkbox"
                    checked={selectedFilters.fashion}
                    value={filterTypes.fashion}
                    onChange={handleFilterChange}
                />
                <label>Fashion</label>
            </div>
            <div>
                <div>

                </div>
                <div>
                    {newsList}
                </div>
            </div>
        </div>
    )
}
export default News
