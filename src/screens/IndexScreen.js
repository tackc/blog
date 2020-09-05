import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
// For ease of use, you can change import variable name at time of import
// import { Context as blogContext } from '../context, BlogContext';

const IndexScreen = () => {
const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <Text>{item.title}</Text>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
