/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Constants from '../Constants'

class Tail extends Component {
    render() {
        const { elements, size, snakeColour } = this.props

        const tailList = elements.map((element, index) => (
            <View 
                key={index}
                style={{
                    backgroundColor: snakeColour,
                    position: 'absolute',
                    width: size,
                    height: size,
                    left: element[0] * size,
                    top: element[1] * size,
                }}
            />
        ))
        
        return (
            <View style={{ width: Constants.GRID_SIZE * size, height: Constants.GRID_SIZE * size }}>
                {tailList}
            </View>
        )
    }
}

Tail.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    size: PropTypes.number,
    snakeColour: PropTypes.string
}

Tail.defaultProps = {
    elements: null,
    size: null,
    snakeColour: Constants.GREEN,
}

export default Tail