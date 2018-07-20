import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class TestComponent extends React.Component {
    render() {
        return (
            <Text>test</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
