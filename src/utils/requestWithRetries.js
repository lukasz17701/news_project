export const requestWithRetries = (requestFunction, retriesLeft) => requestFunction()
    .then(res => {
        if(res.status === 500) throw res
        return res.json()
    })
    .catch(err => {
        if (retriesLeft < 1) {
            throw err
        }
        return requestWithRetries(requestFunction, retriesLeft - 1)
    })
