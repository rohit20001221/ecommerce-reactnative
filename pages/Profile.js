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
import DataLoading from "../components/DataLoading";
// import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import Header from "../components/Header";
import { config } from "../config";

const setStorageItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

const default_user_params = {
  displayName: "",
  googleId: "",
  profileImage: "",
  username: "",
  _id: "",
  is_admin: false,
};

const Profile = () => {
  // const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(default_user_params);
  const [token, setToken] = useState(null);
  const [is_authenticated, setIsAuthenticated] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    Linking.addEventListener("url", ({ url }) => {
      const token = url.match(/token=([^#]+)/);
      // setUser(token[1]);
      setIsAuthenticated(true);
      setStorageItem("@token", token[1]);
      AsyncStorage.getItem("@token").then((value) => {
        setToken(value);

        if (value) {
          fetch(`${config.serverUrl}` + "/users/profile", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${value}`,
            },
          })
            .then((res) => res.json())
            .then((user_profile) => {
              setIsAuthenticated(true);
              setUser(user_profile);
              setUserLoaded(true);
            });
        }
      });
    });

    AsyncStorage.getItem("@token").then((value) => {
      setToken(value);

      if (value) {
        fetch(`${config.serverUrl}` + "/users/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${value}`,
          },
        })
          .then((res) => {
            if (res.status === 401) {
              throw new Error("unauthorized");
            } else {
              return res.json();
            }
          })
          .then((user_profile) => {
            setIsAuthenticated(true);
            setUser(user_profile);
            setUserLoaded(true);
          })
          .catch((err) => {});
      }
    });

    return () => {
      Linking.removeEventListener("url");
    };
  }, [token]);

  const startAuthentication = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `${config.serverUrl}/users/auth/google`
    );
  };

  if (!is_authenticated) {
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

  if (!userLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <DataLoading />
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
            uri: user.profileImage,
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
          description={user.displayName}
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
          description={user.username}
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
          description={user?.mobile}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Button
            onPress={() => {
              AsyncStorage.removeItem("@token").then(() => {
                setToken(null);
                setUserLoaded(false);
                setIsAuthenticated(false);
                setUser(default_user_params);
              });
            }}
            style={{ backgroundColor: "red" }}
            mode="contained"
          >
            Logout
          </Button>
        </View>
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
              onPress={() => {
                console.log(token);
              }}
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
