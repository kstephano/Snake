import React, { Component } from 'react'
import { Alert, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Constants, { randomPosition } from '../Constants'
import GameLoop from '../Systems/GameLoop'
import Head from '../Components/Head'
import Tail from '../Components/Tail'
import Food from '../Components/Food'

class GameScreen extends Component {
    constructor(props) {
      super(props)
      this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE
      this.engine = null
      this.state = {
        running: true,
      }
    }
  
    onEvent = (event) => {
      if (event.type === "GAME_OVER") {
        this.setState({
          running: false
        })
        Alert.alert("GAME OVER")
      }
    }
  
    onSwipe(gestureName) {
      const { SWIPE_UP, SWIPE_DOWN, SWIPE_RIGHT, SWIPE_LEFT } = swipeDirections
      switch (gestureName) {
        case SWIPE_UP:
          this.engine.dispatch({ type: "MOVE_UP" })
          break
        case SWIPE_DOWN:
          this.engine.dispatch({ type: "MOVE_DOWN" })
          break
        case SWIPE_RIGHT:
          this.engine.dispatch({ type: "MOVE_RIGHT" })
          break
        case SWIPE_LEFT:
          this.engine.dispatch({ type: "MOVE_LEFT" })
          break
        default:
          break
      }
    }
  
    reset = () => {
      const { difficulty, snakeColour, mode } = this.props

      this.engine.swap({
        head: { position: [0, 0], size: Constants.CELL_SIZE, updateFrequency: difficulty, nextMove: difficulty, xSpeed: 1, ySpeed: 0, snakeColour, mode, renderer: <Head />},
        food: { position: [randomPosition(0, Constants.GRID_SIZE - 1), randomPosition(0, Constants.GRID_SIZE - 1)], size: 20, renderer: <Food />},
        tail: { elements: [], snakeColour, size: 20, renderer: <Tail />}
      })
      this.setState({
        running: true
      })
    }
  
    render() {
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      }
  
      const { running } = this.state
      const { difficulty, snakeColour, mode } = this.props

      // eslint-disable-next-line no-debugger
      debugger

      return (
        <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            config={config}
            style={styles.canvas}
        >
          <GameEngine 
              ref={(ref) => { this.engine = ref }}
              style = {{
                width: this.boardSize,
                height: this.boardSize,
                flex: null,
                backgroundColor: "white",
              }}
              systems={[GameLoop]}
              entities={{
              head: { position: [0,0], size: Constants.CELL_SIZE, updateFrequency: difficulty, nextMove: difficulty, xSpeed: 1, ySpeed: 0, snakeColour, mode, renderer: <Head /> },
              food: {
                  position: [randomPosition(0, Constants.GRID_SIZE - 1), randomPosition(0, Constants.GRID_SIZE - 1)],
                  size: Constants.CELL_SIZE,
                  renderer: <Food />
              },
              tail: {
                  elements: [],
                  size: Constants.CELL_SIZE,
                  snakeColour,
                  renderer: <Tail />,
              }
              }}
              running={running}
              onEvent={this.onEvent}
          />
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text style={styles.text}>RESTART</Text>
          </TouchableOpacity>
        </GestureRecognizer>
      )
    }
  }
  
  const styles = StyleSheet.create({
    canvas: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#242424',
    },
    button: {
      width: 100,
      height: 50,
      padding: 10,
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: '#87e67e',
      borderRadius: 3
  },
    text: {
      fontFamily: 'monospace',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 17
  },
  });
  
const mapStateToProps = (state) => ({
  snakeColour: state.snakeColour,
  difficulty: state.difficulty,
  mode: state.mode
})

GameScreen.propTypes = {
  difficulty: PropTypes.number,
  snakeColour: PropTypes.string,
  mode: PropTypes.bool
}

GameScreen.defaultProps = {
  difficulty: 10,
  snakeColour: Constants.BLUE,
  mode: false
}

export default connect(mapStateToProps)(GameScreen)
  