function checkKeyAndUpdate(e, player) {
    e = e || window.event;
    if (e.keyCode == '38') {
        player.y -= 1;
    } else if (e.keyCode == '40') {
        player.y += 1;
    } else if (e.keyCode == '37') {
        player.x -= 1;
    } else if (e.keyCode == '39') {
        player.x += 1;
    }

    return player
}

export {checkKeyAndUpdate}