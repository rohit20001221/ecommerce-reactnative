import React from "react";
import { View, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { config } from "../config";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRef } from "react";

const Payment = () => {
  const navigation = useNavigation();
  const webRef = useRef();
  const route = useRoute();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <WebView
        style={{ flex: 1 }}
        source={{ uri: config.serverUrl + "/payment" }}
        javaScriptEnabled={true}
        onNavigationStateChange={(webViewState) => {
          if (
            webViewState.url === config.serverUrl + "/accept_payment" ||
            webViewState.url === config.serverUrl + "/"
          ) {
            navigation.navigate("cart");
          }
        }}
        ref={webRef}
        onLoad={() => {
          webRef.current.postMessage(route.params.order_id);
        }}
      />
    </View>
  );
};

export default Payment;
