const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type','application/json')

        xhr.onload = () => xhr.status > 400 ? reject(xhr.response) : resolve(xhr.response)
        xhr.onerror = () => reject(xhr.response)

        xhr.send(JSON.stringify(body))
    })

}

sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.error(err))

const requestBody = {
    name: 'Lub',
    username: 'Lyubovoe',
    age: 19
}

sendRequest('POST', requestUrl, requestBody)
    .then(data => console.log(data))
    .catch(err => console.error(err))