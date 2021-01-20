import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import { config } from "../config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@token").then((token) => {
      fetch(`${config.serverUrl}/orders/myorders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    });
  }, []);
  return (
    <View>
      <Header title="My Orders" />
      <FlatList
        data={orders}
        renderItem={({ item }) => {
          return (
            <OrderCard
              order_id={item._id}
              payment_id={item.payment_id}
              timestamp={item.createdAt}
            />
          );
        }}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default Orders;
