import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, LogBox } from "react-native";
import { Searchbar } from "react-native-paper";
import ProductGridCard from "../components/ProductGridCard";
import { config } from "../config";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    fetch(`${config.serverUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <SafeAreaView>
      <Searchbar style={{ borderRadius: 0, elevation: 1 }} />
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {categories.map((item) => {
          return (
            <ProductGridCard
              key={item._id}
              title={item.name}
              data={item.images}
              id={item._id}
            />
          );
        })}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
