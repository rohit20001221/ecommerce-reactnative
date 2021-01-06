import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const DataLoading = ({ color, size }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default DataLoading;
