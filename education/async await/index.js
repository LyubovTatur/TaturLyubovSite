const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(), ms)
    )
}

// delay(3000).then(() => console.log('now im here ehehehehe'))

const urlForGettingTodos = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
    return delay(2000)
        .then(() => fetch(urlForGettingTodos))
        .then(response => response.json())
}
fetchTodos()
    .then(data => console.log(data))
    .catch(err => console.error(err))


async function fetchTodosAsync() {
    try {
        await delay(6000)
        const responce = await fetch(urlForGettingTodos)
        const data = await responce.json()
        console.log(data)
    }
    catch (e) {
        console.error(e)
    }
    finally{
        
    }
}
fetchTodosAsync()