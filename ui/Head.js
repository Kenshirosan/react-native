import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';



export default class Head extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left/>
                    <Body>
                        <Title>Calculate a Tip</Title>
                    </Body>
                <Right/>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});