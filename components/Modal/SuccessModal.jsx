import React, { useRef } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import CustomButton from "../CustomButton/CustomButton";
import { router } from "expo-router";

const SuccessModal = ({ isVisible, onClose }) => {
  const animation = useRef(null);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={{ alignItems: "center" }}>
            <LottieView
              autoPlay
              loop={true}
              ref={animation}
              style={styles.animation}
              source={require("../../assets/Lottie/Success.json")}
            />
          </View>
          <CustomButton
            text="Go to Login"
            onPress={() => router.push("/Login")}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    padding: 20,
  },
  animation: {
    width: 150,
    height: 150,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SuccessModal;
