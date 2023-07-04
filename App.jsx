import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [goals, setGoals] = useState([]);

	const addGoalHandler = newGoal => {
		setGoals(currentGoals => [
			...currentGoals,
			{ text: newGoal, id: Math.random.toString },
		]);
	};

	const deleteGoalHandler = id => {
		setGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== id);
		});
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
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
