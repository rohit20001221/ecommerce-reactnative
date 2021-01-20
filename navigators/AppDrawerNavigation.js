import React from "react";
import AppStackNavigator from "./AppStackNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";

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
      <Drawer.Screen
        name="myorders"
        component={Orders}
        options={{ title: "My Orders" }}
      />
    </Drawer.Navigator>
  );
}
