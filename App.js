import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Toto va a la plage</Text>
        <Text>J'y crois pas</Text>
        <Text>yes this shit is working, and well, just A bit of lag</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orangered',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
