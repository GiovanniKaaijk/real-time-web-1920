const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')
require('dotenv').config()
const generateMap = require('./controls/mapLayout')
var Twitter = require('twitter');

app.use(express.static('public'))
    .set("view engine", "ejs")
    .get('/', (req, res) => {
        res.render('index')
    })

const config = {
    port: process.env.PORT || 9000
}

let gameID = 0
let playingRooms = 0
let lastTweet = ''
let lastSecondTweet = ''
let tweettimer = 0;
const rooms = []

var client = new Twitter({
    consumer_key: process.env.key,
    consumer_secret: process.env.secret_key,
    access_token_key: process.env.access,
    access_token_secret: process.env.access_secret
});


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
        if(rooms[data.room - 1] !== undefined) {
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
                if(playingRooms === 0) {
                    setInterval(() => {
                        tweettimer += 1
                    }, 1000);
                    client.stream('statuses/filter', {track: 'bomb'}, function(stream) {
                        stream.on('data', function(event) {
                          if(event.text !== undefined) {
                            if(lastTweet !== event.text) {
                                if(tweettimer > 3) {
                                    io.emit('randombomb', ['bomb', 'random',  Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1])
                                    tweettimer = 0
                                }
                                
                            }
                            lastTweet = event.text
                        }
                        });
                       
                        stream.on('error', function(error) {
                          throw error;
                        });
                      });
                }
                playingRooms++
            } else {
                socket.emit('fullServer')
            }
        }
        
        
    })

    

    socket.on('updatePlayer', data => {
        console.log(data)
        io.to(`room-${data.room}`).emit('updatePlayer', data.player)
    })

    socket.on('placeBomb', data => {
        io.to(`room-${data.room}`).emit('placeBomb', data.player)
    })

    socket.on('disconnect', function(){
        console.log(`Player Disconnected`)
    })
})

server.listen(config.port, () => {
    console.log(`Listening on port:${config.port}`)
  })

  