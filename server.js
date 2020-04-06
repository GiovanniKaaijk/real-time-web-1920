const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')
require('dotenv').config()

app.use(express.static('public'))
    .set("view engine", "ejs")
    .get('/', (req, res) => {
        res.render('index')
    })

const config = {
    port: 9000
}

let games = 0
const connections = [null, null]

io.on('connection', (socket) => {
    console.log('a user connected')
    //chat
    socket.on('message', (msg) => {
        console.log(`${socket.username}: ${msg}`)
        io.emit('message', msg)
    })



    //game
    let playerIndex = -1;
    for (let i in connections) {
      if (connections[i] === null) {
        playerIndex = i;
      }
    }
    socket.emit('player-number', playerIndex)
    if (playerIndex === -1) return

    connections[playerIndex] = socket
    socket.broadcast.emit('player-connect', playerIndex)


    socket.on('createGame', (data) => {
        socket.username = data.name
        socket.emit('createGame')
    })




    socket.on('disconnect', function(){
        console.log(`Player ${playerIndex} Disconnected`)
        connections[playerIndex] = null
    })
})

server.listen(config.port, () => {
    console.log(`Listening on port:${config.port}`)
  })

  