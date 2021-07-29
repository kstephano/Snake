
import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Constants from '../Constants'

// eslint-disable-next-line react/prefer-stateless-function
class Head extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const { size, position, xSpeed, ySpeed, nextMove, updateFrequency, snakeColour, mode } = this.props

        return (
            <View
                style = {{
                    backgroundColor: snakeColour,
                    position: 'absolute',
                    width: size,
                    height: size,
                    top: position[1] * size,
                    left: position[0] * size,
                }}
            />
        )
    }
}

Head.propTypes = {
    size: PropTypes.number,
    position: PropTypes.arrayOf(PropTypes.number),
    xSpeed: PropTypes.number,
    ySpeed: PropTypes.number,
    nextMove: PropTypes.number,
    updateFrequency: PropTypes.number,
    snakeColour: PropTypes.string,
    mode: PropTypes.bool
}

Head.defaultProps = {
    size: Constants.CELL_SIZE,
    position: [0,0],
    xSpeed: 1,
    ySpeed: 0,
    nextMove: 10,
    updateFrequency: 10,
    snakeColour: '#64eb34',
    mode: false
}

export default Head