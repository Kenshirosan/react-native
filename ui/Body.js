import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button  } from 'react-native';
import { Container, Content } from 'native-base';
import Values from './Values';


export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.2,
    };
  }
  updateCustomTip(customTip) {
    if (customTip) {

      return this.setState({
        tip: parseFloat(customTip) / 100
      });
    }

    return this.setState({ tip: 0 });
  }

  render() {

    return (
      <View style={styles.container}>
        <Content style={{ width: '100%' }}>
          <Values tipPercent={this.state.tip} bill={this.state.inputValue} />
            <View style={styles.inputs}>
              <TextInput
                keyboardType="numeric"
                onChangeText={ text => this.setState({inputValue: text})}
                value={this.state.inputValue}
                placeholder="Enter the bill amount"
                underlineColorAndroid="white"
                placeholderTextColor="white"
                style={styles.input}
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="10%"
                  onPress={() => {
                    this.setState({ tip: 0.1 })}
                  }
                />
                <Button
                  title="20%"
                  onPress={() => this.setState({ tip: 0.2 })}
                />
                <Button
                  title="25%"
                  onPress={() => this.setState({ tip: 0.25 })}
                />
                <TextInput
                  style={styles.customTip}
                  value={ (this.state.tip * 100).toString() }
                  keyboardType="numeric"
                  underlineColorAndroid="white"
                  placeholderTextColor="white"
                  onChangeText={ customTip => this.updateCustomTip(customTip)}
                  placeholder="0.00"
                />
            </View>
          </View>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 4,
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20
  },
  input: {
    height: 50,
    width: '100%',
    padding: 5,
    marginBottom: 75,
    color: '#FFF'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: '#FFF'
  }
});
