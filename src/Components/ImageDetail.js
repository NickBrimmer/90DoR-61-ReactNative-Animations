import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
  const { imageSource, title, imageScore } = props;

  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score: {imageScore}, which is great!</Text>
    </View>

  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
