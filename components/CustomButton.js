import React from "react";
import {View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function CustomButton(props) {
    const { onPress, text } = props;
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2BA93E',
        width: '100',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center', //cambiar
    },
    text: {
        color: 'white',
    }
})