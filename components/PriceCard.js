import React from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import { getSubtotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const PriceCard = (props) => {
  const [{ cart }] = useStateValue();
  const subTotal = getSubtotal(cart);
  return (
    <DataTable
      style={{
        backgroundColor: "white",
        elevation: 1,
        marginBottom: 2,
        ...props.style,
      }}
    >
      <DataTable.Header>
        <DataTable.Title>
          <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
            Cart Summary
          </Text>
        </DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Sub Total</DataTable.Cell>
        <DataTable.Cell>$ {subTotal}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Shipping</DataTable.Cell>
        <DataTable.Cell>$ 10</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Discount</DataTable.Cell>
        <DataTable.Cell>10%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Total</DataTable.Cell>
        <DataTable.Cell>$ {(1 - 0.1) * (subTotal + 10)}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default PriceCard;
