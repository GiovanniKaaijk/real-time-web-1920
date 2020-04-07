function generateMap(obstacles){
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
    console.log(mapLayout)
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
  
module.exports = generateMap