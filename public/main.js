import {generateObstacles, generateMap} from './game/map.js'

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

let Player = function(name, type){
    this.name = name;
    this.type = type;
    this.currentTurn = true;
    this.movesPlayed = 0;
}

// Game starter
const home = document.querySelector('.home')
const createGame = document.querySelector('.create h2')
const joinGame = document.querySelector('.join h2')

const createGameName = document.querySelector('.create input')
const joinGameName = document.querySelector('.join input[type="text"]')
const joinGameNumber = document.querySelector('.join input[type="number"]')

createGame.addEventListener('click', () => {
    if (!createGameName.value) { alert('please use a username'); return;}
    socket.emit('createGame', {name: createGameName.value})
    // player = new Player('test', P1)
})

joinGame.addEventListener('click', () => {
    if (!joinGameName.value) { alert('please use a username'); return;}
    if (!joinGameNumber.value) { alert('please fill in a game number'); return;}
    socket.emit('joinGame', {name: joinGameName.value, room: joinGameNumber.value});
    // player = new Player(name, P2)
})

socket.on('player-connect', (player) => {
    console.log(`Player ${player} Disconnected`)
})

socket.on('createGame', (data) => {
   home.classList.add('fade')
   messages.insertAdjacentHTML('beforeend', `<li>${data.username}, please invite your friend to game number ${data.game}</li>`)
})

socket.on('joinGame', () => {
    home.classList.add('fade')
})

socket.on('startGame', (data) => {
    messages.insertAdjacentHTML('beforeend', `<li>Welcome ${data.username} and ${data.opponent} to game number ${data.game}, enjoy the fight!</li>`)
    document.querySelector('body').classList.add(data.game)
    generateMap(data.mapLayout)
})

socket.on('fullServer', () => {
    console.log('full-server')
    document.querySelector('.error').textContent = 'Sorry, this game is full'
}) 