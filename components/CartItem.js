import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const CartItem = () => {
  return (
    <View
      style={{
        height: 200,
        elevation: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 5,
      }}
    >
      <ImageBackground
        source={{
          uri:
            "https://image1.pricedekho.com/p/3/9/49/2492749/10449333-dell-15-5559-ci34gb1tbwin10156-inches-red-picture-large.jpg",
        }}
        resizeMode="stretch"
        style={{ flex: 0.4 }}
      />
      <View style={{ flex: 0.6, padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Dell 15-5559 (Ci3/4GB/1TB/Win10/15.6 Inches) Red
        </Text>
        <Text style={{ fontSize: 15, color: "brown", fontWeight: "bold" }}>
          $ 200
        </Text>
        <Text style={{ fontSize: 15, color: "brown", fontWeight: "bold" }}>
          QTY: 10
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginVertical: 10,
          }}
        >
          <Button
            labelStyle={{ color: "black" }}
            style={{ backgroundColor: "lightgrey" }}
            mode="contained"
          >
            ADD
          </Button>
          <View style={{ width: 10 }}></View>
          <Button
            labelStyle={{ color: "black" }}
            style={{ backgroundColor: "lightgrey" }}
            mode="contained"
          >
            REMOVE
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CartItem;