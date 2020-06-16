import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCouner] = useState(0)

  return (
    <View>
      <Text>Counter Demo</Text>
      <Button title="Increase" onPress={() => setCouner(counter + 1)} />
      <Button title="Decrease" onPress={() => setCouner(counter - 1)} />
      <Text>{counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;


