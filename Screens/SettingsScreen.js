/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import Store from '../Redux/Store'
import { updateDifficulty, updateMode, updateSnake } from '../Redux/Actions'
import Constants from '../Constants'

class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>DIFFICULTY</Text>
                    <View style={styles.difficulty} >
                        <TouchableHighlight 
                            style={styles.button}
                            onPress={() => {
                                Store.dispatch(updateDifficulty(15))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>LOW</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateDifficulty(10))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>MEDIUM</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateDifficulty(5))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>HIGH</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>SNAKE COLOUR</Text>
                    <View style={styles.snakeColour} >
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateSnake(Constants.GREEN))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>GREEN</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateSnake(Constants.BLUE))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>BLUE</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateSnake(Constants.RED))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>RED</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                    
                <View style={styles.section}>
                    <Text style={styles.title}>TELEPORTATION</Text>
                    <View style={styles.teleportation} >
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateMode(true))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>YES</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => {
                                Store.dispatch(updateMode(false))
                            }}
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                        >
                            <Text style={styles.text}>NO</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#242424',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: 100,
        height: 50,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: '#87e67e',
        borderRadius: 3
    },
    activeButton: {
        width: 100,
        height: 50,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        borderRadius: 3
    },
    title: {
        fontFamily: 'monospace',
        color: '#ffffff',
        fontSize: 24,
        marginBottom: 20
    },
    text: {
        fontFamily: 'monospace',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17
    },
    difficulty: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    snakeColour: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    teleportation: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center',
        width: '100%'
    }
})

const mapStateToProps = (state) => ({
    snakeColour: state.snakeColour,
    difficulty: state.difficulty,
    mode: state.mode
})

export default connect(mapStateToProps)(SettingsScreen)