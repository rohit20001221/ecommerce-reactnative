import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Title, Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";

const Cart = () => {
  return (
    <SafeAreaView style={{ padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PriceCard />
        <Title style={{ backgroundColor: "white", padding: 10, elevation: 1 }}>
          Items
        </Title>
        <CartItem />
        <CartItem />
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
