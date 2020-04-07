const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')
require('dotenv').config()
const generateMap = require('./controls/mapLayout')

app.use(express.static('public'))
    .set("view engine", "ejs")
    .get('/', (req, res) => {
        res.render('index')
    })

const config = {
    port: 9000
}

let gameID = 0

const rooms = []

io.on('connection', (socket) => {
    console.log('a user connected')
    //chat
    socket.on('message', (data) => {
        console.log(socket.username)
        console.log(`${socket.username}: ${data.input}`)
        io.to(`room-${data.gameID}`).emit('message', data.input)
    })



    //game
    socket.on('createGame', (data) => {
        gameID ++;
        socket.join(`room-` + gameID)
        socket.username = data.name
        socket.data = {
            player: 1
        }
        rooms.push({game: gameID, members: [data.name]})
        socket.emit('createGame', {
            game: gameID,
            username: data.name
        })
    })

    socket.on('joinGame', (data) => {
        if(rooms[data.room - 1].members.length !== 2) {
            rooms[data.room - 1].members.push(data.name)
            console.log(rooms[data.room - 1].members.length)
            socket.join(`room-` + data.room)
            socket.username = data.name
            socket.data = {
                player: 2
            }
            socket.emit('joinGame')
    
            const connected = io.sockets.adapter.rooms[`room-${gameID}`]
            const opponentID = Object.keys(connected.sockets)[0]
            const opponent = io.sockets.connected[opponentID]
            let mapLayout = generateMap(30)
            console.log(mapLayout)
            io.to(`room-${gameID}`).emit('startGame',  {
                game: gameID,
                username: data.name,
                opponent: opponent.username,
                mapLayout: mapLayout
            })
        } else {
            socket.emit('fullServer')
        }
        
    })

    socket.on('disconnect', function(){
        console.log(`Player Disconnected`)
    })
})

server.listen(config.port, () => {
    console.log(`Listening on port:${config.port}`)
  })

  