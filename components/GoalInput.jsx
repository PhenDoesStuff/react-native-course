import { useState } from 'react';
import { Modal } from 'react-native';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
	const [newGoal, setNewGoal] = useState('');

	const goalInputHandler = enteredText => {
		setNewGoal(enteredText);
	};

	function addGoalHandler() {
		props.onAddGoal(newGoal);
		setNewGoal('');
	}

	return (
		<Modal visible={props.visibile} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={goalInputHandler}
					value={newGoal}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
