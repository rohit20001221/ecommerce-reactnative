import React from "react";
import { View, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import ProductGridCard from "../components/ProductGridCard";

const data = [
  { id: 1, title: "Dell Latitude" },
  { id: 2, title: "Dell G15" },
  { id: 3, title: "Dell Inspiron" },
  { id: 4, title: "Dell Black" },
];

const Home = () => {
  return (
    <View>
      <Searchbar style={{ borderRadius: 0, elevation: 1 }} />
      <ScrollView contentContainerStyle={{ padding: 3 }}>
        <ProductGridCard title={"laptops"} data={data} />
        <ProductGridCard title={"laptops"} data={data} />
        <ProductGridCard title={"laptops"} data={data} />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};

export default Home;
