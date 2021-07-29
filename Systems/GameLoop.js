import Constants, { randomPosition } from '../Constants'

const GameLoop = (entities, { events, dispatch }) => {

    const {head, tail, food} = entities

    if (events.length) {
        for (let i = 0; i < events.length; i++) { 
            // snake cannot move in the opposite way it is currently travelling
           if (events[i].type === "MOVE_UP" && head.ySpeed !== 1) {
               head.xSpeed = 0
               head.ySpeed = -1
           } else if (events[i].type === "MOVE_RIGHT" && head.xSpeed !== -1) {
               head.xSpeed = 1
               head.ySpeed = 0
           } else if (events[i].type === "MOVE_DOWN" && head.ySpeed !== -1) {
               head.xSpeed = 0
               head.ySpeed = 1
           } else if (events[i].type === "MOVE_LEFT" && head.xSpeed !== 1) {
               head.xSpeed = -1
               head.ySpeed = 0
           }
        }
    }

    // nextMove is decremented every frame and the move is executed if it has reached 0, upon which it resets.
    head.nextMove -= 1
    if (head.nextMove === 0) {
        head.nextMove = head.updateFrequency

        if (head.mode === false) {
            if (
                // snake head move becomes out of bounds of the grid.
                head.position[0] + head.xSpeed < 0 ||
                head.position[0] + head.xSpeed >= Constants.GRID_SIZE ||
                head.position[1] + head.ySpeed < 0 ||
                head.position[1] + head.ySpeed >= Constants.GRID_SIZE
            ) {
                // end the game
                dispatch({ type: "GAME_OVER" })
            } else {
                // move the tail
                tail.elements = [[head.position[0], head.position[1]], ... tail.elements]
                tail.elements.pop()

                // move the snake
                head.position[0] += head.xSpeed
                head.position[1] += head.ySpeed
                
                // check if the head hits the tail
                for (let i = 0; i < tail.elements.length; i++) {
                    if (tail.elements[i][0] === head.position[0] && tail.elements[i][1] === head.position[1]) {
                        dispatch({ type: "GAME_OVER"})
                    }
                }

                // check if there is food on new cell
                if (head.position[0] === food.position[0] && head.position[1] === food.position[1]) {
                    // extend the tail
                    tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements)

                    food.position = [
                        randomPosition(0, Constants.GRID_SIZE - 1),
                        randomPosition(0, Constants.GRID_SIZE - 1)
                    ]
                }
            }
        } else {
            // move the tail
            tail.elements = [[head.position[0], head.position[1]], ... tail.elements]
            tail.elements.pop()

            // teleport snake to other side of the grid if at a boundary
            if (head.position[0] + head.xSpeed < 0) {
                head.position[0] = Constants.GRID_SIZE - 1
                head.position[1] += head.ySpeed
            } else if (head.position[0] + head.xSpeed >= Constants.GRID_SIZE) {
                head.position[0] = 0
                head.position[1] += head.ySpeed
            } else if (head.position[1] + head.ySpeed < 0) {
                head.position[0] += head.xSpeed
                head.position[1] = Constants.GRID_SIZE - 1
            } else if (head.position[1] + head.ySpeed >= Constants.GRID_SIZE) {
                head.position[0] += head.xSpeed
                head.position[1] = 0
            } else {
                // move the snake
                head.position[0] += head.xSpeed
                head.position[1] += head.ySpeed
            }
            
            // check if the head hits the tail
            for (let i = 0; i < tail.elements.length; i++) {
                if (tail.elements[i][0] === head.position[0] && tail.elements[i][1] === head.position[1]) {
                    dispatch({ type: "GAME_OVER"})
                }
            }

            // check if there is food on new cell
            if (head.position[0] === food.position[0] && head.position[1] === food.position[1]) {
                // extend the tail
                tail.elements = [[food.position[0], food.position[1]]].concat(tail.elements)

                food.position = [
                    randomPosition(0, Constants.GRID_SIZE - 1),
                    randomPosition(0, Constants.GRID_SIZE - 1)
                ]
            }
        }
    }
    return entities
}

export default GameLoop