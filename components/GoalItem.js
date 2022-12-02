import { View, Text, StyleSheet, Pressable } from "react-native"
const GoalItem = ({ text, id, onDelete }) => {
    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple={{ color: '#210644' }} onPress={() => onDelete(id)}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )


}


export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})