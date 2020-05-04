function checkKeyAndUpdate(e, player) {
    e = e || window.event;
    const x = player.x
    const y = player.y
    if(e.keyCode == '32') {
        player = ['bomb', player.player, player.x, player.y]
    }
    if (e.keyCode == '38') {
        if(y !== 1) {
            if(!document.querySelector(`.row-${y - 1} .col-${x}`).classList.contains('obstacle')) {
                player.y -= 1;
            }
            
        }
    } else if (e.keyCode == '40') {
        if(y !== 10) {
            if(!document.querySelector(`.row-${y + 1} .col-${x}`).classList.contains('obstacle')) {
                player.y += 1;
            }
        }
    } else if (e.keyCode == '37') {
        if(x !== 1) {
            if(!document.querySelector(`.row-${y} .col-${x - 1}`).classList.contains('obstacle')) {
                player.x -= 1;
            }
        }
    } else if (e.keyCode == '39') {
        if(x !== 10) {
            if(!document.querySelector(`.row-${y} .col-${x + 1}`).classList.contains('obstacle')) {
                player.x += 1;
            }
        }
    }

    return player
}

function updatePlayer(updatedPlayer) {
    console.log(updatedPlayer)
    const oldPlayerPos = document.querySelector(`.player-${updatedPlayer.player}`)
    oldPlayerPos.parentNode.removeChild(oldPlayerPos)
    const newPlayerPosParent = document.querySelector(`.row-${updatedPlayer.y} .col-${updatedPlayer.x}`)
    const newPlayerPos = document.createElement('div')
    newPlayerPos.classList.add('player', `player-${updatedPlayer.player}`)
    newPlayerPos.setAttribute('data-x', updatedPlayer.x)
    newPlayerPos.setAttribute('data-y', updatedPlayer.y)
    newPlayerPosParent.appendChild(newPlayerPos)
}


export {checkKeyAndUpdate, updatePlayer}