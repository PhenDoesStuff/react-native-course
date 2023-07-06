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
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title='Cancel' />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
