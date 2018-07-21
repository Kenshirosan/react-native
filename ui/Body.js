import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Container, Content } from 'native-base';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.2,
    };
  }
  updateCustomTip(customTip) {
    // if (Platform.OS === 'android') {
        // Code reference to import Platform if needed here
    // }
    // if (Platform.OS === 'ios') {
        // Code reference
    // }
    if (customTip) {
      return this.setState({
        tip: parseFloat(customTip) / 100
      });
    }

    return this.setState({ tip: 0 });
  }

  alert() {
    Alert.alert(
      'Hello toto',
      'How you doing ?',
      [
        {
          text: 'custom',
          onPress: () => console.log('button pressed')
        },
        {
          text: 'cancel',
          onPress: () => console.log('cancel button pressed'),
          style: 'cancel'
        },
      ]
    );
  }

  render() {

    let tip = 0.00;

    if (this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tip;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    return (
      <Content padder>
        <View style={styles.container}>
          <Text>${ tip }</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={ text => this.setState({inputValue: text})}
            value={this.state.inputValue}
            placeholder="0.00"
            style={styles.input}
          />
          <View style={styles.buttonGroup}>
            <Button
              title="10%"
              onPress={() => this.setState({ tip: 0.1 })}
            />
            <Button
              title="20%"
              onPress={() => this.setState({ tip: 0.2 })}
            />
            <Button
              title="25%"
              onPress={() => this.setState({ tip: 0.25 })}
            />
            <Button
              title="Alert"
              onPress={this.alert}
            />
            <TextInput
              style={styles.customTip}
              value={ (this.state.tip * 100).toString() }
              keyboardType="numeric"
              onChangeText={ customTip => this.updateCustomTip(customTip)}
              placeholder="0.00"
            />
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#eee',
    padding: 4,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#333',
    padding: 5,
    marginBottom: 75,
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  customTip: {
    height: 30,
    width: '60%',
    borderColor: '#333',
    padding: 5,
  }
});
