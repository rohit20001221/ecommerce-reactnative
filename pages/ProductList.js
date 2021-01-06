import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { config } from "../config";
import { useRoute } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import DataLoading from "../components/DataLoading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
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
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={products}
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
