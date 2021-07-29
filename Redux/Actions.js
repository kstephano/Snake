// action types
export const UPDATE_DIFFICULTY = 'UPDATE_DIFFICULTY'
export const UPDATE_SNAKE = 'UPDATE_SNAKE'
export const UPDATE_MODE = 'UPDATE_MODE'

// action creators
export const updateDifficulty = (update) => ({
    type: UPDATE_DIFFICULTY,
    payload: update
})

export const updateSnake = (update) => ({
    type: UPDATE_SNAKE,
    payload: update
})

export const updateMode = (update) => ({
    type: UPDATE_MODE,
    payload: update
})