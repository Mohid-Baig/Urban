import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Agents from "../../helpers/mock/AgentMock";
const AgentList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.agentContainer}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={Agents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
  },
  agentContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 5,
    borderWidth: 4,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 5,
  },
});

export default AgentList;
