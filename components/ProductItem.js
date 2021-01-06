import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Rating from "./Rating";

const ProductItem = ({ title, image, price, rating, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("product_detail", { title, id })}
      activeOpacity={0.8}
    >
      <View
        style={{
          height: 300,
          display: "flex",
          flexDirection: "row",
          elevation: 1,
          backgroundColor: "white",
          marginBottom: 10,
        }}
      >
        <ImageBackground
          resizeMode="contain"
          source={{
            uri: image,
          }}
          style={{ flex: 0.5 }}
        />
        <View style={{ flex: 0.5, padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>{title}</Text>
          <Text style={{ fontSize: 15, color: "brown", fontWeight: "bold" }}>
            $ {price}
          </Text>
          <Rating rating={rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
