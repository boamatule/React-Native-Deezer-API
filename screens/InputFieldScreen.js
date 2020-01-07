import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class InputFieldScreen extends React.Component {
	render() {
		const { labelText} = this.props;
		return (
			<View style={StyleSheet.wrapper}>
				<Text>{labelText}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  }
});
export default InputFieldScreen;