import React, { useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Animated } from "react-native";
import { Title, Button, DataTable } from "react-native-paper";
import { FlatListSlider } from "react-native-flatlist-slider";
import Rating from "../components/Rating";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

var images = [
  "https://image1.pricedekho.com/p/3/9/49/2492749/10449333-dell-15-5559-ci34gb1tbwin10156-inches-red-picture-large.jpg",
  "https://image2.pricedekho.com/p/3/3/13/1833513/4568963-dell-inspiron-3543-notebook-5th-gen-ci5-8gb-1tb-win81-2gb-graph-x560333in9-39624-cm-black-picture-big.jpg?tr=w-420",
  "https://image1.pricedekho.com/p/3/0/70/3027270/38018653-lenovo-ideapad-500-80nt00pain-notebook-picture-big.jpg?tr=w-420",
];

images = images.map((item) => {
  return { image: item };
});

const ProductDetail = () => {
  const [snackVisible, setSnackVisible] = useState(false);
  const [fadeValue, setFadeValue] = useState(new Animated.Value(1));
  const navigation = useNavigation();

  const dismissSnack = () => {
    setTimeout(() => {
      setSnackVisible(false);
    }, 2000);
  };

  const _start = () => {
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      {snackVisible ? (
        <Animated.View style={{ opacity: fadeValue }}>
          <View
            style={{
              height: 50,
              backgroundColor: "#22BB33",
              marginHorizontal: -10,
              marginTop: -10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Item added !
            </Text>
          </View>
        </Animated.View>
      ) : null}

      <ScrollView>
        <Title style={{ marginBottom: 15 }}>
          Dell Inspiron 3543 Notebook (5th Gen Ci5/ 8GB/ 1TB/ Win8.1/ 2GB Graph)
          (X560333IN9) (39.624 cm, Black)
        </Title>
        {/* <View style={{ padding: 10 }}></View> */}

        <FlatListSlider
          data={images}
          height={240}
          timer={5000}
          onPress={() => {}}
          indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
          indicatorActiveColor={"#8e44ad"}
          indicatorInActiveColor={"#ffffff"}
          indicatorActiveWidth={30}
          animation
        />

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Details</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>
              <Ionicons name="md-pricetag" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>Price</DataTable.Cell>
            <DataTable.Cell>$ 200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Ionicons name="md-cart" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>Category</DataTable.Cell>
            <DataTable.Cell>Laptops</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <FontAwesome5 name="user-alt" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>Rating</DataTable.Cell>
            <DataTable.Cell>
              <Rating size={20} rating={4} />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Entypo name="shopping-bag" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>In Stock</DataTable.Cell>
            <DataTable.Cell>18</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
      <View>
        <Button
          onPress={() => {
            setSnackVisible(true);
            _start();
            dismissSnack();
          }}
          style={{ marginVertical: 5, backgroundColor: "black" }}
          mode="contained"
        >
          Add to cart
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
