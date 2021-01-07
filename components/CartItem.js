import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, IconButton } from "react-native-paper";
import { useStateValue } from "../StateProvider";

const CartItem = ({ title, image, price, quantity, id }) => {
  const [{}, dispatch] = useStateValue();

  return (
    <View
      style={{
        height: 300,
        elevation: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 2,
      }}
    >
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={{ flex: 0.4 }}
      />
      <View style={{ flex: 0.6, padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>{title}</Text>
        <Text style={{ fontSize: 15, color: "brown", fontWeight: "bold" }}>
          $ {price}
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
            onPress={() => {
              dispatch({
                type: "UPDATE_CART_ITEM",
                id: id,
                update: 1,
              });
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            {quantity}
          </Text>
          <IconButton
            icon={() => (
              <AntDesign name="minuscircle" size={24} color="black" />
            )}
            onPress={() => {
              dispatch({
                type: "UPDATE_CART_ITEM",
                id: id,
                update: -1,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
