import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [newGoal, setNewGoal] = useState('');
	const [goals, setGoals] = useState([]);

	const goalInputHandler = enteredText => {
		setNewGoal(enteredText);
	};

	const addGoalHandler = () => {
		setGoals(currentGoals => [...currentGoals, newGoal]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={goalInputHandler}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				{goals.map((goal, idx) => (
					<Text key={idx}>{goal}</Text>
				))}
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
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
});
