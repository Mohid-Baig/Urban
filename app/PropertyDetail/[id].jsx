import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import BuildingMock from "../../helpers/mock/BuildingMock";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import SVGImages from "../../assets/SVGs/index";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReviewContainer from "../../screens/PropertyDetail/ReviewContainer";
import PropertyDetailMap from "../../assets/images/PropertyDetailMap.png";
const PropertyDetail = () => {
  const { id } = useLocalSearchParams();
  const data = BuildingMock.find((building) => building.id === parseInt(id));
  const [mainImage, setMainImage] = useState(data?.propertyImage);
  const [selectedLocation, setSelectedLocation] = useState(null);

  if (!data) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>Property not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: mainImage }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.topIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.back()}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Entypo name="share-alternative" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <SVGImages.Icons.HeartIcon height={24} width={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.similarContainer}>
            <TouchableOpacity onPress={() => setMainImage(data.propertyImage)}>
              <Image
                source={{ uri: data.propertyImage }}
                style={styles.similarImage}
              />
            </TouchableOpacity>
            {data.similarPropertyImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => setMainImage(image)}>
                <Image source={{ uri: image }} style={styles.similarImage} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.bottomContainer}>
            <LinearGradient
              colors={["#0075FF", "#4c9fff"]}
              style={styles.gradient}
            >
              <Text style={styles.infoText}>{data.rating}</Text>
            </LinearGradient>
            <LinearGradient
              colors={["#0075FF", "#4c9fff"]}
              style={styles.gradient}
            >
              <Text style={styles.infoText}>{data.type}</Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.rowContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.title}>{data.pricePerMonth}</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.rowContainer, styles.locationContainer]}>
          <SVGImages.Icons.LocationIcon />
          <Text style={styles.description}>{data.locationCity}</Text>
        </View>
        <Text style={styles.description}>Per Month</Text>
      </View>

      <View style={[styles.rowContainer, styles.marginTop]}>
        <View style={styles.tabsContainer}>
          <LinearGradient
            colors={["#0075FF", "#4c9fff"]}
            style={styles.gradient}
          >
            <Text style={styles.infoText}>Rent</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#0075FF", "#4c9fff"]}
            style={styles.gradient}
          >
            <Text style={styles.infoText}>Sale</Text>
          </LinearGradient>
        </View>
        <TouchableOpacity>
          <SVGImages.Icons.RotateImage height={50} width={50} />
        </TouchableOpacity>
      </View>

      <View style={styles.agentContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.owner.image }} style={styles.ownerImage} />
        </View>
        <View style={styles.agentInfo}>
          <Text style={styles.ownerName}>{data.owner.name}</Text>
          <Text style={styles.description}>Real Estate Agent</Text>
        </View>
        <AntDesign name="message1" size={24} color="black" />
      </View>

      <View style={styles.propertyDetailContainer}>
        <View style={styles.propertyDetail}>
          <SVGImages.Icons.BedroomIcon />
          <Text>Bedroom</Text>
        </View>
        <View style={styles.propertyDetail}>
          <SVGImages.Icons.BathroomIcon />
          <Text>Bathroom</Text>
        </View>
        <View style={styles.propertyDetail}>
          <SVGImages.Icons.WaterIcon />
          <Text>Filter Water</Text>
        </View>
      </View>

      <View>
        <Text style={styles.subTitle}>Location & Public Facilities</Text>
        <View style={styles.locationRow}>
          <SVGImages.Icons.LocationIcon height={24} width={24} />
          <Text>{data.address}</Text>
        </View>
        <View style={styles.propertyDetailContainer}>
          <View style={styles.propertyDetail}>
            <Text>2 Gas Station</Text>
          </View>
          <View style={styles.propertyDetail}>
            <Text>Hospitals</Text>
          </View>
          <View style={styles.propertyDetail}>
            <Text>Cab Facilities</Text>
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <TouchableOpacity onPress={() => router.push("PropertyDetail/map/Map")}>
          <Image source={PropertyDetailMap} style={styles.PropertyDetailMap} />
        </TouchableOpacity>
      </View>

      <View style={styles.reviewContainer}>
        <Text style={styles.subTitle}>Reviews</Text>
        <LinearGradient
          colors={["#0075FF", "#4c9fff"]}
          style={styles.totalReviewContainer}
        >
          <View style={styles.ratingContainer}>
            <View style={styles.starBox}>
              <FontAwesome name="star" size={30} color="#ffc700" />
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="star" size={20} color="#ffc700" />
                <AntDesign name="star" size={20} color="#ffc700" />
                <AntDesign name="star" size={20} color="#ffc700" />
                <AntDesign name="star" size={20} color="#ffc700" />
                <AntDesign name="staro" size={20} color="#fff" />
                <Text>4.9</Text>
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Montserrat_400Regular",
                  marginTop: 5,
                  fontSize: 12,
                }}
              >
                From 112 Reviewers
              </Text>
            </View>
          </View>
          <SVGImages.Icons.ReviewImage />
        </LinearGradient>
        <ReviewContainer id={data.id} />
      </View>
      <CustomButton text="Buy Now" />
    </ScrollView>
  );
};

export default PropertyDetail;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  subTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    marginBottom: 10,
  },
  imageBackground: {
    width: "100%",
    height: 450,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageStyle: {
    borderRadius: 30,
  },
  overlay: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
  },
  topIcons: {
    position: "absolute",
    top: 20,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  iconButton: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ownerName: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
  rightIcons: {
    flexDirection: "row",
    gap: 10,
  },
  similarContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "column",
    right: 10,
  },
  similarImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    margin: 4,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  gradient: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  infoText: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  locationContainer: {
    gap: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginTop: {
    marginTop: 15,
  },
  agentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#f5f4f8",
    padding: 24,
    borderRadius: 20,
  },
  imageContainer: {
    marginRight: 10,
  },
  ownerImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  agentInfo: {
    flex: 1,
  },
  propertyDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  propertyDetail: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F4F8",
    paddingVertical: 15,
    justifyContent: "center",
    gap: 10,
    borderRadius: 12,
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  totalReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    marginBottom: 20,
    borderRadius: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  starBox: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
  },
  mapContainer: {
    height: 280,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  PropertyDetailMap: {
    width: "100%",
    height: 267,
  },
  mapoverlayText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
});
