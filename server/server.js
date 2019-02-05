const path = require('path')
const express = require('express')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/v1/routes', routes)


// unsure if i need this here?? 
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public'))
})

module.exports = server
