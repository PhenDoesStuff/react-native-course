import { Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
	return (
		<View key={props.itemData.index} style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#dddddd' }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.itemData.item.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: 'white',
		padding: 8,
	},
});

export default GoalItem;
