import { baseApiUrl } from "../config/api"

export const getSportsArticles = () => {
    return fetch(`${baseApiUrl}/articles/sports`)
}

export const getFashionNews = () => {
    return fetch(`${baseApiUrl}/articles/fashion`)
}
