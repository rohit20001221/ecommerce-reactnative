import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const Home = () => {
  return (
    <View>
      <Searchbar style={{ borderRadius: 0, elevation: 1 }} />
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
