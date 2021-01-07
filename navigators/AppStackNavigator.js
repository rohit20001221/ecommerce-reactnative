import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Badge } from "react-native-paper";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import { useStateValue } from "../StateProvider";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const [{ cart }] = useStateValue();

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return [
            <View key={1}>
              <TouchableOpacity onPress={() => navigation.navigate("cart")}>
                <Ionicons name="md-cart" size={30} color="black" />
              </TouchableOpacity>
              {cart?.length > 0 ? (
                <Badge
                  style={{ position: "absolute", top: -5, right: -1 }}
                  visible
                  size={15}
                >
                  {cart?.length}
                </Badge>
              ) : null}
            </View>,
          ];
        },
        headerRightContainerStyle: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        },
        headerTitleStyle: {
          fontFamily: "vollkorn-medium",
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

      {/* Product List */}
      <Stack.Screen
        component={ProductList}
        options={({ navigation, route }) => ({
          headerTitle: route.params.category,
        })}
        name="product_list"
      />

      {/* Product Detail */}
      <Stack.Screen
        component={ProductDetail}
        name="product_detail"
        options={({ navigation, route }) => ({
          headerTitle: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
