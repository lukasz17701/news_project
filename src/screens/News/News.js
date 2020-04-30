import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { requestRetriesAmount, filterTypes } from "../../consts/news"

import { getFashionNews, getSportsArticles } from "../../services/news"
import { getActiveFilters } from "../../dataProcessing/newsProcessing"
import { requestWithRetries } from "../../utils/requestWithRetries"

import NewsElement from "./NewsElement/NewsElement"

import './News.scss'

const filtersToRequestMap = {
    sports: () => requestWithRetries(getSportsArticles, requestRetriesAmount),
    fashion: () => requestWithRetries(getFashionNews, requestRetriesAmount),
}

const News = () => {
    const [news, setNews] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({ sports: true, fashion: true })

    const clearNews = () => setNews([])
    const addNews = newsToAdd => setNews(currentItems => [...currentItems, ...newsToAdd])
    const setFilterValue = ({checked, key}) => setSelectedFilters({...selectedFilters, [key]: checked})
    const handleFilterChange = ({target: {checked, value}}) => setFilterValue({checked, key: value})

    const getNews = activeFilters => activeFilters
        .forEach(filter => filtersToRequestMap[filter]()
            .then(({articles}) => addNews(articles))
            // TODO: Error handling should be added here
            .catch(console.log)
        )

    useEffect(() => {
        clearNews()
        const activeFilters = getActiveFilters(selectedFilters)
        getNews(activeFilters)
    }, [selectedFilters])

    const newsList = news.length
        ? news.map(NewsElement)
        : "There are no news to display"

    return (
        <section className="newsSection">
            <div className="filters">
                <span className="filters__header">Data Sources</span>
                <div>
                    <input
                        type="checkbox"
                        checked={selectedFilters.sports}
                        value={filterTypes.sports}
                        onChange={handleFilterChange}
                    />
                    <label>Sports</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={selectedFilters.fashion}
                        value={filterTypes.fashion}
                        onChange={handleFilterChange}
                    />
                    <label>Fashion</label>
                </div>
            </div>
            <div className="newsWrapper">
                {newsList}
            </div>
        </section>
    )
}
export default News
