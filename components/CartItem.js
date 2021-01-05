import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, IconButton } from "react-native-paper";

const CartItem = () => {
  return (
    <View
      style={{
        height: 200,
        elevation: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 2,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <IconButton
            icon={() => <AntDesign name="pluscircle" size={24} color="black" />}
          />
          <Text
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            10
          </Text>
          <IconButton
            icon={() => (
              <AntDesign name="minuscircle" size={24} color="black" />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
