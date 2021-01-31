const express = require('express')
const services = require('./services')
const handlify = require('./handlers')
const app = express()
const port = 3000

const userHandlers = handlify('users')
const postHandlers = handlify('posts')

app.use(express.json())

app.get('/', userHandlers(services).get);
app.post('/', userHandlers(services).post);
app.put('/:id', userHandlers(services).put);
app.delete('/:id', userHandlers(services).delete);

app.get('/post', postHandlers(services).get);
app.post('/post', postHandlers(services).post);
app.put('/post/:id', postHandlers(services).put);
app.delete('/post/:id', postHandlers(services).delete);

app.listen(port, () => console.log(`Aplicacion corriendo en el puerto ${port}` ) );