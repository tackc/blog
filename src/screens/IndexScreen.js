import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
// For ease of use, you can change import variable name at time of import
// import { Context as blogContext } from '../context, BlogContext';
import { Feather } from '@expo/vector-icons/';

const IndexScreen = () => {
const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Feather name="trash-2" />
            </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
