import React from "react";
import { View, Text, Animated } from "react-native";

const SnackBar = ({ fadeValue, setSnackVisible, title = "Item added !" }) => {
  const dismissSnack = () => {
    setTimeout(() => {
      setSnackVisible(false);
    }, 2000);
  };

  const _start = () => {
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  _start();
  dismissSnack();

  return (
    <Animated.View style={{ opacity: fadeValue }}>
      <View
        style={{
          height: 50,
          backgroundColor: "#22BB33",
          marginHorizontal: -10,
          marginTop: -10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>{title}</Text>
      </View>
    </Animated.View>
  );
};

export default SnackBar;
