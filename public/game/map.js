function generateMap(layout){
    const board = document.querySelector('.board')
    layout.forEach(row => {
        const boardRow = document.createElement('div')
        boardRow.classList.add('board-row')
        row.forEach(col => {
            const el = document.createElement('div')
            el.classList.add('col')
            console.log(col.state)
            if(col.state === 'obstacle') {el.classList.add('obstacle')}
            el.setAttribute('data-state', col.state)
            el.setAttribute('data-x', col.x)
            el.setAttribute('data-y', col.y)
            boardRow.appendChild(el)
        })
        board.appendChild(boardRow)
    });
}
  
export {generateMap}