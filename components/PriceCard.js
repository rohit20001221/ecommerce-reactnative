import React from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";

const PriceCard = () => {
  return (
    <DataTable
      style={{ backgroundColor: "white", elevation: 1, marginBottom: 2 }}
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
        <DataTable.Cell>$ 200</DataTable.Cell>
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
        <DataTable.Cell>$ {210 - 0.1 * 210}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default PriceCard;
