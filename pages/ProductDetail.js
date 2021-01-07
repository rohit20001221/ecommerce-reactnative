import React, { useState } from "react";
import { View, ScrollView, SafeAreaView, Animated, Text } from "react-native";
import { Button, DataTable } from "react-native-paper";
import { FlatListSlider } from "react-native-flatlist-slider";
import Rating from "../components/Rating";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import SnackBar from "../components/SnackBar";
import { useEffect } from "react";
import { config } from "../config";
import DataLoading from "../components/DataLoading";
import { useStateValue } from "../StateProvider";

var images = [
  "https://image1.pricedekho.com/p/3/9/49/2492749/10449333-dell-15-5559-ci34gb1tbwin10156-inches-red-picture-large.jpg",
  "https://image2.pricedekho.com/p/3/3/13/1833513/4568963-dell-inspiron-3543-notebook-5th-gen-ci5-8gb-1tb-win81-2gb-graph-x560333in9-39624-cm-black-picture-big.jpg?tr=w-420",
  "https://image1.pricedekho.com/p/3/0/70/3027270/38018653-lenovo-ideapad-500-80nt00pain-notebook-picture-big.jpg?tr=w-420",
];

const ProductDetail = () => {
  const [snackVisible, setSnackVisible] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [fadeValue, setFadeValue] = useState(new Animated.Value(1));
  const [title, setTitle] = useState("Item added!");

  const [product, setProduct] = useState({
    title: "",
    price: null,
    images: [],
    rating: 0,
    quantity: 0,
    category: {
      _id: "",
      name: "",
    },
    cover: "",
  });
  // const navigation = useNavigation();
  const route = useRoute();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    fetch(`${config.serverUrl}/products/${route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setDataLoaded(true);
      });
  }, []);

  if (!dataLoaded) {
    return <DataLoading size="large" color="black" />;
  }

  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      {snackVisible ? (
        <SnackBar
          title={title}
          fadeValue={fadeValue}
          setSnackVisible={setSnackVisible}
        />
      ) : null}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ marginBottom: 15, fontWeight: "bold", fontSize: 15 }}>
          {product.title}
        </Text>
        <FlatListSlider
          data={product.images.map((item) => {
            return { image: item };
          })}
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
            <DataTable.Cell>$ {product.price}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Ionicons name="md-cart" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>Category</DataTable.Cell>
            <DataTable.Cell>{product.category.name}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <FontAwesome5 name="user-alt" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>Rating</DataTable.Cell>
            <DataTable.Cell>
              <Rating size={20} rating={product.rating} />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Entypo name="shopping-bag" size={24} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>In Stock</DataTable.Cell>
            <DataTable.Cell>{product.quantity}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
      <View>
        <Button
          onPress={() => {
            dispatch({
              type: "ADD_TO_CART",
              item: {
                title: product.title,
                image: product.cover,
                price: product.price,
                quantity: 1,
                id: route.params.id,
              },
              setTitle: setTitle,
            });
            setSnackVisible(true);
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
