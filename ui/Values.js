import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';



const Values = ({ tipPercent, bill }) => {
    let tip = 0.00;
    let total = 0.00;

    if (bill) {
      tip = parseFloat(bill) * tipPercent;
      total = parseFloat(bill) + tip;
      tip = round(tip);
      total = round(total);
    }

    return (
        <View style={styles.values}>
            <Text style={styles.label}>Tip Amount</Text>
            <Text style={styles.tip}>${ tip }</Text>
            <Text style={styles.label}>Total Amount</Text>
            <Text style={styles.total}>${ total }</Text>
        </View>
    )
}

function round(float) {
    return (Math.round(float * 100) / 100).toFixed(2);
}


const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#484848',
    width: '100%',
  },
  label: {
    color:'#FFF'
  },
  tip: {
    fontSize: 60,
    color: '#FFF',
    fontWeight: 'bold'
  },
  total: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  },
});

export default Values;