import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProductItem = ({ title, image, price, rating }) => {
  var ratings = [0, 0, 0, 0, 0];
  var rating_ = rating;
  for (let i = 0; i < ratings.length; i++) {
    if (rating_) {
      ratings[i] = 1;
      rating_--;
    }
  }
  return (
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
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{title}</Text>
        <Text style={{ fontSize: 15, color: "brown", fontWeight: "bold" }}>
          $ {price}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {ratings.map((item, index) => {
            if (item) {
              return (
                <MaterialIcons key={index} name="star" size={24} color="gold" />
              );
            } else {
              return (
                <MaterialIcons
                  key={index}
                  name="star-border"
                  size={24}
                  color="gold"
                />
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
