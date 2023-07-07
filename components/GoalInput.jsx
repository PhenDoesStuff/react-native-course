import { useState } from 'react';
import { Image, Modal } from 'react-native';
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
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={goalInputHandler}
					value={newGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title='Cancel'
							onPress={props.onCloseModal}
							color='#f31282'
						/>
					</View>
					<View style={styles.button}>
						<Button
							title='Add Goal'
							onPress={addGoalHandler}
							color='#b180f0'
						/>
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
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
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
