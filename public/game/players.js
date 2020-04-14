function initPlayer(index) {
    generatePlayerOne()
    generatePlayerTwo()
}

function generatePlayerOne (){
    const col = document.querySelector('.row-1 .col-1')
    const player = document.createElement('div')
    player.classList.add('player', 'player-one')
    col.appendChild(player)
}

function generatePlayerTwo() {
    const col = document.querySelector('.row-10 .col-10')
    const player = document.createElement('div')
    player.classList.add('player', 'player-two')
    col.appendChild(player)
}


export {initPlayer}