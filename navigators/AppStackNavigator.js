import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Badge } from "react-native-paper";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return [
            <View key={1}>
              <TouchableOpacity onPress={() => navigation.navigate("cart")}>
                <Ionicons name="md-cart" size={30} color="black" />
              </TouchableOpacity>
              <Badge
                style={{ position: "absolute", top: -5, right: -1 }}
                visible
                size={15}
              >
                10
              </Badge>
            </View>,
          ];
        },
        headerRightContainerStyle: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        },
      })}
    >
      {/* Home Screen */}
      <Stack.Screen
        options={({ navigation }) => ({
          headerTitle: "Home",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons key={2} name="md-menu" size={30} color="black" />
              </TouchableOpacity>
            );
          },
          headerLeftContainerStyle: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          },
        })}
        component={Home}
        name="home"
      />

      {/* Cart */}
      <Stack.Screen
        component={Cart}
        options={{ headerTitle: "Cart" }}
        name="cart"
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
