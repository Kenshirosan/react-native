import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class TestComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textColor}>TestComponentAndroid</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    padding: 10,
    fontSize: 24,
    backgroundColor: 'grey',
    color: '#00FF00',
},
});