import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Another piece of text!</Text>
			</View>
			<Text style={styles.text}>Hello World!</Text>
			<Button title='Tap me!' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		margin: 16,
		borderWidth: 2,
		padding: 16,
		borderColor: 'red',
	},
});
