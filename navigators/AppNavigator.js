import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hi</Text>
      <Button onPress={() => navigation.navigate("about")} title="CLICK ME" />
    </View>
  );
};

const About = () => {
  return <Text>About us</Text>;
};

const SearchPage = () => {
  return <Text>Search</Text>;
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return [
            <Ionicons key={1} name="md-cart" size={24} color="black" />,
            <TouchableOpacity
              key={2}
              onPress={() => navigation.navigate("search")}
            >
              <Ionicons name="md-search" size={24} color="black" />
            </TouchableOpacity>,
          ];
        },
        headerRightContainerStyle: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        },
      })}
    >
      <Stack.Screen
        options={{
          headerTitle: "Home",
          headerLeft: () => {
            return <Ionicons key={2} name="md-menu" size={24} color="black" />;
          },
          headerLeftContainerStyle: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          },
        }}
        component={Home}
        name="home"
      />
      <Stack.Screen
        options={{
          headerTitle: "About US",
        }}
        component={About}
        name="about"
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: null,
          headerTitle: () => (
            <TextInput
              style={{ color: "white" }}
              placeholder="search product"
            />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="ios-close-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            );
          },
        })}
        name="search"
        component={SearchPage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
