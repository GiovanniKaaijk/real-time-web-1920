import {generateMap} from './game/map.js'
import {initPlayer} from './game/players'
import {checkKeyAndUpdate} from './game/inputUpdate'
// chat

const socket = io();
const form = document.querySelector('form');
const chatInput = document.querySelector('#chat-input')
const messages = document.querySelector('#messages')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('message', {
        input: chatInput.value, 
        gameID: document.querySelector('body').classList[0]})
    chatInput.value = ''
    return false
})

socket.on('message', (msg) => {
    messages.insertAdjacentHTML('beforeend', `<li>${msg}</li>`)
})

// Player

let player = {
    player: '',
    x: Number,
    y: Number
}

// Game starter
const home = document.querySelector('.home')
const createGame = document.querySelector('.create form')
const joinGame = document.querySelector('.join form')

const createGameName = document.querySelector('.create input[type="text"]')
const joinGameName = document.querySelector('.join input[type="text"]')
const joinGameNumber = document.querySelector('.join input[type="number"]')

createGame.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!createGameName.value) { alert('please use a username'); return;}
    socket.emit('createGame', {name: createGameName.value})
})

joinGame.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!joinGameName.value) { alert('please use a username'); return;}
    if (!joinGameNumber.value) { alert('please fill in a game number'); return;}
    socket.emit('joinGame', {name: joinGameName.value, room: joinGameNumber.value});
})

socket.on('player-connect', (player) => {
    console.log(`Player ${player} Disconnected`)
})

socket.on('createGame', (data) => {
   removeOverlay()
   document.querySelector('body').classList.add(data.game)
   player.player = 'one'
   player.x = 1
   player.y = 1
   messages.insertAdjacentHTML('beforeend', `<li>${data.username}, please invite your friend to game number ${data.game}</li>`)
    // generateMap(data.mapLayout)
    // initPlayer()
})

socket.on('joinGame', () => {
    player.player = 'two'
    player.x = 10
    player.y = 10
    removeOverlay()
})

socket.on('startGame', (data) => {
    messages.insertAdjacentHTML('beforeend', `<li>Welcome ${data.username} and ${data.opponent} to game number ${data.game}, enjoy the fight!</li>`)
    document.querySelector('body').classList.add(data.game)
    generateMap(data.mapLayout)
    initPlayer()
    document.addEventListener('keydown', (e) => {
        player = checkKeyAndUpdate(e, player)
        socket.emit('updatePlayer', {player: player, room: document.querySelector('body').classList[0]})
    })
})

socket.on('fullServer', () => {
    console.log('full-server')
    document.querySelector('.error').textContent = 'Sorry, this game is full'
}) 

socket.on('updatePlayer', data => {
    updatePlayer(data)
})


function updatePlayer(updatedPlayer) {
    console.log(updatedPlayer)
    const oldPlayerPos = document.querySelector(`.player-${updatedPlayer.player}`)
    oldPlayerPos.parentNode.removeChild(oldPlayerPos)
    const newPlayerPosParent = document.querySelector(`.row-${updatedPlayer.y} .col-${updatedPlayer.x}`)
    const newPlayerPos = document.createElement('div')
    newPlayerPos.classList.add('player', `player-${updatedPlayer.player}`)
    newPlayerPosParent.appendChild(newPlayerPos)
}

function removeOverlay() {
    home.classList.add('prefade')
   setTimeout(() => {
    home.classList.add('fade')
    setTimeout(() => {
        home.classList.add('hide')
    }, 500);
   }, 300);
}