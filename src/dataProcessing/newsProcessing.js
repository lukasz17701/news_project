export const flattenNewsData = data => data
    .reduce((news, response) => response.articles && [...news, ...response.articles] || news,
        [])

export const getActiveFilters = selectedFilters => Object.entries(selectedFilters)
    .filter(([,isChecked]) => isChecked)
    .map(([keyName]) => keyName)
