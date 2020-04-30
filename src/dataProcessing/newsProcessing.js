export const getActiveFilters = selectedFilters => Object.entries(selectedFilters)
    .filter(([,isChecked]) => isChecked)
    .map(([keyName]) => keyName)
