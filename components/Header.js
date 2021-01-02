import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.Action onPress={() => navigation.openDrawer()} icon="menu" />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
    </View>
  );
};

export default Header;
