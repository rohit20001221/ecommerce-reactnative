import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { config } from "../config";
import { Searchbar } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import DataLoading from "../components/DataLoading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(/.*/i);
  const route = useRoute();

  useEffect(() => {
    fetch(`${config.serverUrl}/categories/${route.params.id}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDataLoaded(true);
      });
  }, []);

  if (!dataLoaded) {
    return <DataLoading size="large" color="black" />;
  }

  return (
    <View style={{ paddingBottom: 10 }}>
      <Searchbar
        value={searchQuery}
        onChangeText={(text) => {
          if (text.trim() !== "") {
            setSearchQuery(new RegExp(text.trim(), "i"));
          } else {
            setSearchQuery(/.*/i);
          }
        }}
        style={{ borderRadius: 0, elevation: 1 }}
      />
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={products.filter((item) => searchQuery.exec(item.title))}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <ProductItem
              title={item.title}
              image={item.cover}
              price={item.price}
              rating={item.rating}
              id={item._id}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductList;
