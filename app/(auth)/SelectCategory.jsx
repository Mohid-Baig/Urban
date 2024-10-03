import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import BuildingMock from "../../helpers/mock/BuildingMock";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";
import { useRouter } from "expo-router";
import CustomButton from "../../components/CustomButton/CustomButton";
const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  const renderItem = ({ item }) => {
    const isSelected = selectedCategory === item.id;
    return (
      <TouchableOpacity
        style={[
          styles.categoryContainer,
          isSelected && styles.selectedCategory,
        ]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <ImageBackground
          source={{ uri: item.propertyImage }}
          style={styles.image}
        />
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <LeftArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.push("Login")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        <Text>Add Your </Text>
        <Text style={styles.colorTitle}>Preferences</Text>
      </Text>
      <Text style={styles.description}>
        You can edit this later on your account setting.
      </Text>
      <FlatList
        data={BuildingMock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton text="Next" onPress={() => router.push("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: "#F5F4F8",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipText: {
    color: "#0075FF",
    fontFamily: "Montserrat_600SemiBold",
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    marginBottom: 10,
  },
  colorTitle: {
    color: "#0075FF",
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
  },
  flatListContent: {},
  columnWrapper: {
    justifyContent: "space-between",
    gap: 15,
  },
  categoryContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f4f8",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 20,
  },
  selectedCategory: {
    backgroundColor: "#0075FF",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "BebasNeue_400Regular",
    color: "#333333",
  },
});

export default SelectCategory;
