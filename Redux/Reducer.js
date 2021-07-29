/* eslint-disable no-debugger */
import {UPDATE_DIFFICULTY, UPDATE_SNAKE, UPDATE_MODE } from './Actions'

const Reducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_DIFFICULTY:
            return {
                ...state, 
                difficulty: action.payload
            }
        case UPDATE_SNAKE:
            return {
                ...state, 
                snakeColour: action.payload
            }
        case UPDATE_MODE:
            return {
                ...state, 
                mode: action.payload
            }
        default:
            return state
    }
}

export default Reducer