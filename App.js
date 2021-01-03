import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawerNavigation from "./navigators/AppDrawerNavigation";
import { Provider as PaperProvider } from "react-native-paper";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

export default function App() {
  const [assetsLoaded] = useFonts({
    "vollkorn-medium": require("./assets/fonts/Vollkorn-Medium.ttf"),
  });

  if (!assetsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppDrawerNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
