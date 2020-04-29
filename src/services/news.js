import { baseApiUrl } from "../config/api"

export const getSportsArticles = () => {
    return fetch(`${baseApiUrl}/articles/sports`)
        .then(res => res.json())
}

export const getFashionNews = () => {
    return fetch(`${baseApiUrl}/articles/fashion`)
        .then(res => res.json())
}
