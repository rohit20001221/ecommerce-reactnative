import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductGridCard = ({ title, data, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("product_list", { category: title, id: id })
      }
    >
      <View style={{ backgroundColor: "white", padding: 5, marginBottom: 4 }}>
        <Text
          style={{
            paddingVertical: 10,
            backgroundColor: "white",
            fontFamily: "vollkorn-medium",
            fontSize: 20,
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
                  backgroundColor: "white",
                }}
              >
                <ImageBackground
                  source={{
                    uri: item,
                  }}
                  style={{ flex: 1 }}
                  resizeMode="contain"
                />
                {/* <Text>{item.title}</Text> */}
              </View>
            );
          }}
          data={data}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
        <View
          style={{
            alignItems: "flex-end",
            backgroundColor: "white",
            paddingVertical: 5,
          }}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductGridCard;
