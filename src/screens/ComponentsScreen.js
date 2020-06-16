import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScrean = () => {
  const greeting = 'Hello! My name is Nick!'


  return (
    <>
      <View>
        <Text style={styles.textStyle} >This is the Components Screen</Text>
        <Text>{greeting}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ComponentsScrean;