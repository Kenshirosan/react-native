import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TestComponent from './components/TestComponent';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Toto va a la plage</Text>*/}
        {/*<Text>J'y crois pas</Text>*/}
        {/*<Text>yes this shit is working, and well, just A bit of lag</Text>*/}
        {/*<TestComponent />*/}
        <TextInput placeholder="Enter the amount" style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    padding: 5,
  }
});
