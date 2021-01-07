import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { LogBox } from "react-native";
import { Searchbar } from "react-native-paper";
import DataLoading from "../components/DataLoading";
import ProductGridCard from "../components/ProductGridCard";
import { config } from "../config";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    fetch(`${config.serverUrl}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data), setDataLoaded(true);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (!dataLoaded) {
    return <DataLoading size="large" color="black" />;
  }

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
