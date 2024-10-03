import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { ONBOARDINGMOCK } from "../helpers/mock/OnboardingMock";
import CustomButton from "../components/CustomButton/CustomButton";
import LeftArrow from "../assets/SVGs/Files/LeftArrow";
import { router } from "expo-router";

const Onboarding = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ONBOARDINGMOCK.length - 1) {
      swiperRef.current.scrollBy(1);
    } else {
      router.push("Login");
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={true}
        loop={false}
        onIndexChanged={setCurrentIndex}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dotStyle}
      >
        {ONBOARDINGMOCK.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.content}</Text>
          </View>
        ))}
      </Swiper>
      {currentIndex > 0 && (
        <TouchableOpacity style={styles.arrow} onPress={handlePrevious}>
          <LeftArrow />
        </TouchableOpacity>
      )}
      <CustomButton text="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 40,
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: "BebasNeue_400Regular",
  },
  activeDot: {
    width: 40,
  },
  dotStyle: {
    width: 20,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
});

export default Onboarding;
