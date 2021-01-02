import React from "react";
import AppStackNavigator from "./AppStackNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();

export default function AppDrawerNavigation() {
  return (
    <Drawer.Navigator hideStatusBar initialRouteName="root">
      <Drawer.Screen
        name="root"
        options={{ title: "Home" }}
        component={AppStackNavigator}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Drawer.Navigator>
  );
}
