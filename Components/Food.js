/* eslint-disable global-require */
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const Food = ({ size, position }) => (
    <Image 
        source={require('../Assets/apple.png')}
        style={{
            position: 'absolute',
            width: size,
            height: size,
            left: position[0] * size,
            top: position[1] * size,
        }}
    />
)

Food.propTypes = {
    size: PropTypes.number,
    position: PropTypes.arrayOf(PropTypes.number)
}

Food.defaultProps = {
    size: null,
    position: null
}

export default Food