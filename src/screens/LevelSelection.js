import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import { LevelButton } from '../components/LevelButton'

export function LevelSelection(props) {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>

                    <Text style={styles.title}>
                        Selecione o Nivel
                    </Text>

                    <LevelButton
                        namedLevel='Fácil'
                        bgColor='#49b65d'
                        level={0.1}
                        onLevelSelected={props.onLevelSelected}
                    />
                    <LevelButton
                        namedLevel='Normal'
                        bgColor='#2765F7'
                        level={0.2}
                        onLevelSelected={props.onLevelSelected}
                    />
                    <LevelButton
                        namedLevel='Difícil'
                        bgColor='#F26337'
                        level={0.3}
                        onLevelSelected={props.onLevelSelected}
                    />
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 13
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})