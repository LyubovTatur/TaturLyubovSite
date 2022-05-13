const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok)
            return response.json()
        else
            return response.json().then(err => {
               throw new Error('что то пошло не так')
            })
    })

}

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

const requestBody = {
    name: 'Lub',
    username: 'Lyubovoe',
    age: 19
}

sendRequest('POST', requestUrl, requestBody)
    .then(data => console.log(data))
    .catch(err => console.error(err))