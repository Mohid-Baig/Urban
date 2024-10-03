import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BuildingMock from "../../helpers/mock/BuildingMock";
import CustomStarRating from "../../components/CustomStarRating/CustomStarRating";

const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image URL

const ReviewContainer = ({ id }) => {
  const data = BuildingMock.find((building) => building.id === parseInt(id));

  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText} allowFontScaling={false}>
          No data available for the selected building.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.reviews.map((review, index) => (
        <View key={index} style={styles.reviewContainer}>
          <Image
            source={{ uri: data.owner.image || placeholderImage }}
            style={styles.reviewerImage}
            defaultSource={{ uri: placeholderImage }}
          />
          <View style={styles.reviewTextContainer}>
            <Text style={styles.reviewerName} allowFontScaling={false}>
              {review.reviewer}
            </Text>
            <Text style={styles.comment} allowFontScaling={false}>
              {review.comment}
            </Text>
          </View>
          <CustomStarRating rating={review.rating} maxStars={5} />
        </View>
      ))}
    </View>
  );
};

export default ReviewContainer;

const styles = StyleSheet.create({
  container: {},
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#f5f4f8",
  },
  reviewerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewerName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  comment: {
    marginBottom: 5,
  },
});
