import React from "react";
import { View, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

const data = [
  {
    id: "1",
    title: "Dell 15-5559 (Ci3/4GB/1TB/Win10/15.6 Inches) Red",
    image:
      "https://image1.pricedekho.com/p/3/9/49/2492749/10449333-dell-15-5559-ci34gb1tbwin10156-inches-red-picture-large.jpg",
    price: 200,
    rating: 3,
  },
  {
    id: "2",
    title:
      "Dell Inspiron 3543 Notebook (5th Gen Ci5/ 8GB/ 1TB/ Win8.1/ 2GB Graph) (X560333IN9) (39.624 cm, Black)",
    image:
      "https://image2.pricedekho.com/p/3/3/13/1833513/4568963-dell-inspiron-3543-notebook-5th-gen-ci5-8gb-1tb-win81-2gb-graph-x560333in9-39624-cm-black-picture-big.jpg?tr=w-420",
    price: 350,
    rating: 4,
  },
  {
    id: "3",
    title: "Lenovo Ideapad 500 (80NT00PAIN) Notebook",
    image:
      "https://image1.pricedekho.com/p/3/0/70/3027270/38018653-lenovo-ideapad-500-80nt00pain-notebook-picture-big.jpg?tr=w-420",
    price: 125,
    rating: 3,
  },
];

const ProductList = () => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <ProductItem
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductList;
