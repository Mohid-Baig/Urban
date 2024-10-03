import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import AgentList from "../../../screens/Home/AgentList";
import TopLocations from "../../../screens/Home/TopLocation";
import FeaturedEstates from "../../../screens/Home/FeaturedEstates";
import PopularEstates from "../../../screens/Home/PopularEstates";
import NewEstates from "../../../screens/Home/NewEstates";
import PropertyTypeList from "../../../screens/Home/PropertyTypeList";
import HomeHeader from "../../../screens/Home/HomeHeader";

const sections = [
  {
    title: "HomeHeader",
    component: <HomeHeader />,
    showHeading: false,
  },
  {
    title: "Property Types",
    component: <PropertyTypeList />,
    showHeading: false,
  },
  {
    title: "Featured Estates",
    component: <FeaturedEstates />,
    showHeading: true,
  },
  {
    title: "Popular Estates",
    component: <PopularEstates />,
    showHeading: true,
  },
  { title: "Top Locations", component: <TopLocations />, showHeading: true },
  { title: "Top Agents", component: <AgentList />, showHeading: true },
  { title: "New Estates", component: <NewEstates />, showHeading: true },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            {item.showHeading && (
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>{item.title}</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            )}
            {item.component}
          </View>
        )}
        contentContainerStyle={styles.scrollViewContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  scrollViewContainer: {},
  title: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 32,
    marginBottom: 20,
  },
  sectionContainer: {},
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 30,
  },
  subTitle: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 24,
  },
  seeAllText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "#0075FF",
  },
});
