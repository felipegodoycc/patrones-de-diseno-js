const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// Aplicamos a modo de ejemplo el patron adaptador
const adapter = {
    get: url => instance.get(url),
    post: (url,body) => instance.post(url,body),
    put: (url, body) => instance.put(url,body),
    delete: (url) => instance.delete(url)
}

module.exports = adapter