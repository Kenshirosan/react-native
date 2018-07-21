import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';


const Head = () =>
    (
        <Header style={styles.header}>
            <Left/>
                <Body>
                    <Title>Calculate a Tip</Title>
                </Body>
            <Right/>
        </Header>
    )


const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

export default Head;