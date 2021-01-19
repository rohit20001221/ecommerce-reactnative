import React from "react";
import { View, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { config } from "../config";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStateValue } from "../StateProvider";

const Payment = () => {
  const navigation = useNavigation();
  const webRef = useRef();
  const route = useRoute();
  const [, dispatch] = useStateValue();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <WebView
        style={{ flex: 1 }}
        source={{ uri: config.serverUrl + "/payment" }}
        javaScriptEnabled={true}
        originWhitelist={["*"]}
        onNavigationStateChange={(webViewState) => {
          if (webViewState.url === config.serverUrl + "/payment_successful") {
            dispatch({
              type: "CLEAR_CART",
            });
            navigation.navigate("cart");
          } else if (
            webViewState.url ===
            config.serverUrl + "/payment_failed"
          ) {
            navigation.navigate("cart");
          }
        }}
        ref={webRef}
        onLoad={() => {
          AsyncStorage.getItem("@token").then((token) => {
            const data = {
              order_id: route.params.order_id,
              token: token,
            };
            webRef.current.postMessage(JSON.stringify(data));
          });
        }}
      />
    </View>
  );
};

export default Payment;
