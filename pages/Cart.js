import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import { Title, Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { useStateValue } from "../StateProvider";
import { useNavigation } from "@react-navigation/native";
import { config } from "../config";
import { getSubtotal } from "../reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Linking from "expo-linking";
// import { config } from "../config";

const window = Dimensions.get("window");

const Cart = () => {
  const [{ cart }] = useStateValue();
  const navigation = useNavigation();

  if (cart.length <= 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Title>Cart is Empty</Title>
      </View>
    );
  }

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <PriceCard />
      <Title
        style={{
          backgroundColor: "white",
          padding: 10,
          elevation: 1,
        }}
      >
        Items
      </Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({ item }) => {
          return (
            <CartItem
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: window.width,
        }}
      >
        <Button
          labelStyle={{ color: "white" }}
          style={{ backgroundColor: "black", borderRadius: 0, padding: 10 }}
          mode="contained"
          onPress={() => {
            AsyncStorage.getItem("@token").then((token) => {
              let data = cart.map((item) => ({
                product: item.id,
                quantity: item.quantity,
              }));

              data = { products: data };

              fetch(config.serverUrl + "/orders/create", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  navigation.navigate("payment", {
                    order_id: data.order_id,
                  });
                });
            });
          }}
        >
          Proceed to pay
        </Button>
      </View>
    </View>
  );
};

export default Cart;
