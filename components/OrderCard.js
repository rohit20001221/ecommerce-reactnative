import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderCard = ({ order_id, payment_id, timestamp }) => {
  const date = new Date(timestamp);
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Order ID</Text>
      <Text>{order_id}</Text>
      <Text style={styles.bold}>Payment ID</Text>
      <Text>{payment_id}</Text>
      <View style={styles.footer}>
        <Text>
          <Text style={styles.bold}>Ordered on</Text>{" "}
          {date.toLocaleDateString()}
        </Text>
        <View style={{ width: 10 }}></View>
        <Text>
          <Text style={styles.bold}>Ordered at</Text>{" "}
          {date.toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    elevation: 1,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
  },
});

export default OrderCard;
