import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.Action onPress={() => navigation.openDrawer()} icon="menu" />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;
