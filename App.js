import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {

  const [goals, setGoals] = useState([])

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addHandler = (enterdGoal) => {
    setGoals((currentGoals) => [...currentGoals, { text: enterdGoal, id: Math.random().toString() }])
  }
  const startModal = () => {
    setModalIsVisible(true)
  }
  const endMOdal = () => {
    setModalIsVisible(false)
  }
  const deleteHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startModal} />
        <GoalInput visible={modalIsVisible} onButtonPress={addHandler} endMOdal={endMOdal} />
        <View style={styles.goalContainer}>
          <FlatList alwaysBounceVertical={false} data={goals} renderItem={(goal) => {
            return <GoalItem text={goal.item.text} id={goal.item.id} onDelete={deleteHandler} />
          }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
