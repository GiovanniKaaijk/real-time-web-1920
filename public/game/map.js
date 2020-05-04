function generateMap(layout){
    const board = document.querySelector('.playground')
    // generateFrontMap(30).forEach((row, i) => {
    layout.forEach((row, i) => {
        const boardRow = document.createElement('div')
        boardRow.classList.add('board-row')
        boardRow.classList.add(`row-${i + 1}`)
        row.forEach(col => {
            const el = document.createElement('div')
            el.classList.add('col')
            el.classList.add(`col-${col.x}`)
            if(col.state === 'obstacle') {el.classList.add('obstacle')}
            // el.setAttribute('data-state', col.state)
            el.setAttribute('data-x', col.x)
            el.setAttribute('data-y', col.y)
            boardRow.appendChild(el)
        })
        board.appendChild(boardRow)
    });
}

// TIJDELIJK

function generateFrontMap(obstacles){
    let totalObstacles = 0;
    let mapLayout = []
    for (let i = 1; i <= 10; i++) {

        const row = []

        for (let j = 0; j < 10; j++) {
            const state = createObstacle(obstacles, totalObstacles)
            const x = j+1
            const y = i
            row.push({
                state: state,
                x: x,
                y: y
            })
        }
        mapLayout.push(row)
    }
    return mapLayout
}

function createObstacle(obstacles, totalObstacles) {
    if(totalObstacles < obstacles) {
        const random = Math.random()
        if((obstacles/100) > random) {
            totalObstacles++
            return 'obstacle'
        } else {
            return 'empty'
        }
    }
}
  
export {generateMap}