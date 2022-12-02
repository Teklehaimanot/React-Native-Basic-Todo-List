import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from "react"
const GoalInput = ({ onButtonPress, visible, endMOdal }) => {
    const [enterdGoal, setEnterdGoal] = useState('')

    const handleEnterdGoal = (enterdGoal) => {
        setEnterdGoal(enterdGoal)

    }

    const handleButton = () => {
        onButtonPress(enterdGoal)
        setEnterdGoal('')
        endMOdal()
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.textArea}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='please wrtie your goal here' onChangeText={handleEnterdGoal} value={enterdGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD GOAL' onPress={handleButton} color={'#8E65EF'} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endMOdal} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>)
}


export default GoalInput

const styles = StyleSheet.create({
    textArea: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        paddingBottom: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B8A1EF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        width: '90%',
        padding: 8,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        width: 100,
        marginHorizontal: 20,
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})