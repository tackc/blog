import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  (navigation.getParam('id'))
  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
