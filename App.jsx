import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [isModalVisibile, setIsModalVisibile] = useState(false);
	const [goals, setGoals] = useState([]);

	const toggleGoalModalHandler = () => {
		setIsModalVisibile(!isModalVisibile);
	};

	const addGoalHandler = newGoal => {
		setGoals(currentGoals => [
			...currentGoals,
			{ text: newGoal, id: Math.random.toString },
		]);
		toggleGoalModalHandler();
	};

	const deleteGoalHandler = id => {
		setGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== id);
		});
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title='Add New Goal'
				color='#5e0acc'
				onPress={toggleGoalModalHandler}
			/>
			<GoalInput
				visible={isModalVisibile}
				onAddGoal={addGoalHandler}
				onCloseModal={toggleGoalModalHandler}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={itemData => {
						return (
							<GoalItem
								itemData={itemData}
								id={itemData.item.id}
								onDeleteItem={deleteGoalHandler}
							/>
						);
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
});
