/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.title}>SNAKE</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
                    <Text style={styles.text}>NEW GAME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.text}>SETTINGS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242424',
    },
    button: {
        width: 120,
        height: 50,
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'monospace',
        backgroundColor: '#87e67e',
        alignItems: 'center',
        borderRadius: 3
    },
    title: {
        fontFamily: 'monospace',
        color: '#ffffff',
        fontSize: 34,
        marginBottom: 20
    },
    text: {
        fontFamily: 'monospace',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17
    },
})