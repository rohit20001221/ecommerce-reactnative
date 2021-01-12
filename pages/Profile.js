import React, { useState, useEffect } from "react";
import { View, Modal, TouchableWithoutFeedback, Linking } from "react-native";
import {
  Avatar,
  Divider,
  List,
  TextInput,
  Title,
  Button,
  IconButton,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import Header from "../components/Header";
import { config } from "../config";

const setStorageItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

const getStorageItem = async (key) => {
  let value = await AsyncStorage.getItem(key);
  return value;
};

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(async () => {
    let token = await getStorageItem("@authtoken");
    console.log(token);
    return token;
  });
  const [title, setTitle] = useState("");

  useEffect(() => {
    Linking.addEventListener("url", ({ url }) => {
      const token = url.match(/token=([^#]+)/);
      // setUser(token[1]);
      setToken(token[1]);
    });

    return () => {
      Linking.removeEventListener("url");
    };
  }, [token]);

  const startAuthentication = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `${config.serverUrl}/users/auth/google`,
      { showInRecents: true }
    );
    console.log(result);
  };

  if (token === null) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            style={{ backgroundColor: "red" }}
            onPress={() => {
              // Linking.openURL(`${config.serverUrl}/users/auth/google`);
              startAuthentication();
            }}
            mode="contained"
          >
            Google
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Header />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Avatar.Image
          source={{
            uri:
              "https://static.toiimg.com/thumb/msid-56833673,width-1200,height-900,resizemode-4/.jpg",
          }}
          size={150}
        />
      </View>
      <Divider />
      <List.Section>
        <List.Subheader>Profile</List.Subheader>
        <List.Item
          left={(props) => (
            <List.Icon
              icon={() => (
                <FontAwesome name="user-circle-o" size={30} color="black" />
              )}
            />
          )}
          right={() => (
            <IconButton
              onPress={() => {
                setTitle("Name");
                setModalVisible(true);
              }}
              icon="pencil"
            />
          )}
          title="Name"
          description={user}
        />
        <List.Item
          left={(props) => (
            <List.Icon
              icon={() => (
                <MaterialIcons name="email" size={30} color="black" />
              )}
            />
          )}
          right={() => (
            <IconButton
              onPress={() => {
                setTitle("Email");
                setModalVisible(true);
              }}
              icon="pencil"
            />
          )}
          title="Email"
          description="rohit20001221@gmail.com"
        />
        <List.Item
          left={(props) => (
            <List.Icon
              icon={() => (
                <MaterialIcons name="phone" size={30} color="black" />
              )}
            />
          )}
          right={() => (
            <IconButton
              onPress={() => {
                setTitle("Mobile");
                setModalVisible(true);
              }}
              icon="pencil"
            />
          )}
          title="Mobile"
          description="9515793306"
        />
      </List.Section>
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View
              style={{ flex: 1, backgroundColor: "rgba(123,121,121,0.45)" }}
            ></View>
          </TouchableWithoutFeedback>

          <View style={{ padding: 10, backgroundColor: "white" }}>
            <Title>{title}</Title>
            <TextInput
              selectionColor="black"
              underlineColor="black"
              style={{ backgroundColor: "white", borderBottomColor: "black" }}
            />

            <Button
              style={{ marginVertical: 10, backgroundColor: "black" }}
              mode="contained"
            >
              Save
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
