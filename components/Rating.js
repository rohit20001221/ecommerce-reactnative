import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Rating = ({ rating, size = 24 }) => {
  var ratings = [0, 0, 0, 0, 0];
  var rating_ = rating;
  for (let i = 0; i < ratings.length; i++) {
    if (rating_) {
      ratings[i] = 1;
      rating_--;
    }
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {ratings.map((item, index) => {
        if (item) {
          return (
            <MaterialIcons key={index} name="star" size={size} color="gold" />
          );
        } else {
          return (
            <MaterialIcons
              key={index}
              name="star-border"
              size={size}
              color="gold"
            />
          );
        }
      })}
    </View>
  );
};

export default Rating;
