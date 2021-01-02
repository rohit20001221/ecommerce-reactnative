import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawerNavigation from "./navigators/AppDrawerNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppDrawerNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
