import React, { useEffect } from "react";
import { View, ScrollView, SafeAreaView, LogBox } from "react-native";
import { Searchbar } from "react-native-paper";
import ProductGridCard from "../components/ProductGridCard";

const data = [
  {
    id: 1,
    // title: "Dell Latitude",
    image: "https://5.imimg.com/data5/EF/VD/MY-4119045/dell-laptop-500x500.jpg",
  },
  {
    id: 2,
    // title: "Dell G15",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71TSV%2BEMFbL._SL1500_.jpg",
  },
  {
    id: 3,
    // title: "Dell Inspiron",
    image:
      "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_multiple_products/laptop/new-category-page-laptop-vostro-14-3491-14-5401-800x620.png?fmt=png-alpha&amp;wid=800&amp;hei=620",
  },
  {
    id: 4,
    // title: "Dell Black",
    image:
      "https://image1.pricedekho.com/p/3/9/49/2492749/10449333-dell-15-5559-ci34gb1tbwin10156-inches-red-picture-large.jpg",
  },
];

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <SafeAreaView>
      <Searchbar style={{ borderRadius: 0, elevation: 1 }} />
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <ProductGridCard title={"Laptops"} data={data} />
        <ProductGridCard title={"Laptops"} data={data} />
        <ProductGridCard title={"Laptops"} data={data} />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
