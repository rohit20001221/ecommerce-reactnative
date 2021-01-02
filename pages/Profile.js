import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;
