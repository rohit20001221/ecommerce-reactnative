import React, { useState } from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import {
  Avatar,
  Divider,
  List,
  TextInput,
  Title,
  Button,
  IconButton,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");

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
          description="J.Rohit Sai Nagarjuna Reddy"
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
                setTitle("Name");
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
