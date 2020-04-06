// chat

const socket = io();
const form = document.querySelector('form');
const chatInput = document.querySelector('#chat-input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('message', chatInput.value)
    chatInput.value = ''
    return false
})

socket.on('message', (msg) => {
    document.querySelector('#messages').insertAdjacentHTML('beforeend', `<li>${msg}</li>`)
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

createGame.addEventListener('click', () => {
    socket.emit('createGame', {name: document.querySelector('#create-username')});
    // player = new Player('test', P1)
})

joinGame.addEventListener('click', () => {
    socket.emit('joinGame', {name: 'test2', room: 0});
    // player = new Player(name, P2)
})

socket.on('player-connect', (player) => {
    console.log(`Player ${player} Disconnected`)
})

socket.on('createGame', () => {
   home.classList.add('fade')
})