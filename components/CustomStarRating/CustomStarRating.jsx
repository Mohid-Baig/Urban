import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure you have react-native-vector-icons installed

const CustomStarRating = ({ rating, maxStars }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <TouchableOpacity key={i} activeOpacity={0.7}>
        <Icon
          name={i <= rating ? "star" : "star-o"}
          size={20}
          color="#ffd700"
          style={styles.star}
        />
      </TouchableOpacity>
    );
  }
  return <View style={styles.starContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
  },
  star: {
    marginHorizontal: 2,
  },
});

export default CustomStarRating;
