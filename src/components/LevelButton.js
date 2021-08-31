import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export function LevelButton({ namedLevel, bgColor, level, onLevelSelected }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={() => onLevelSelected(level)}
        >
            <Text style={styles.buttonLabel}>{namedLevel}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5
    },

    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    }
})