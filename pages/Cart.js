import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Title, Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { useStateValue } from "../StateProvider";

const Cart = () => {
  const [{ cart }] = useStateValue();

  if (cart.length <= 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Title>Cart is Empty</Title>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PriceCard />
        <Title style={{ backgroundColor: "white", padding: 10, elevation: 1 }}>
          Items
        </Title>
        {cart.map((item) => {
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
        })}
        <Button
          labelStyle={{ color: "white" }}
          style={{ backgroundColor: "black" }}
          mode="contained"
        >
          Proceed to pay
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
