import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";

const ProductGridCard = ({ title, data }) => {
  return (
    <View style={{ backgroundColor: "#f5f6fa", padding: 3, marginBottom: 5 }}>
      <Text
        style={{
          paddingVertical: 10,
          backgroundColor: "white",
          marginBottom: -1,
        }}
      >
        {title}
      </Text>
      <FlatList
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 200,
                flex: 1,
                margin: 1,
                backgroundColor: "white",
              }}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://5.imimg.com/data5/EF/VD/MY-4119045/dell-laptop-500x500.jpg",
                }}
                style={{ flex: 1 }}
              />
              <Text>{item.title}</Text>
            </View>
          );
        }}
        data={data}
        numColumns={2}
      />
      <View
        style={{
          alignItems: "flex-end",
          backgroundColor: "white",
          paddingVertical: 5,
          marginTop: -1,
        }}
      >
        <Text>more....</Text>
      </View>
    </View>
  );
};

export default ProductGridCard;
