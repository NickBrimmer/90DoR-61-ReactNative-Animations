import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail imageSource={require('../../assets/forest.jpg')} title="Forest" imageScore="9" />
      <ImageDetail image="" title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore="2" />
      <ImageDetail image="" title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore="5" />
      <ImageDetail />
    </View>
  );

};

const styles = StyleSheet.create({});

export default ImageScreen;
