import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

import LeftArrow from "../../assets/SVGs/Files/LeftArrow";
import InputComponent from "../InputComponent/InputComponent";
import MailIcon from "../../assets/SVGs/Files/MailIcon";
import CustomButton from "../CustomButton/CustomButton";
export default function ForgotPasswordModal({ isVisible, onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <LeftArrow style={styles.closeButton} />
            </TouchableOpacity>
            <Text style={styles.title}>Forgot Password</Text>
            <View></View>
          </View>
          <Text style={styles.description}>
            Don't worry, it happens to the best of us. Enter your email address
            below and we'll help you reset your password.
          </Text>
          <InputComponent
            label="Email"
            IconComponent={MailIcon}
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <CustomButton text="Next" onPress={onSubmit} />

          <Text style={styles.bottomText}>
            <Text>By continuing, you agree to Shopping </Text>
            <Text style={styles.colorText}>Conditions of Use </Text>
            <Text>and </Text>
            <Text style={styles.colorText}>Privacy Notice</Text>
          </Text>
        </View>
      </View>
    </Modal>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end", // Align to bottom
    alignItems: "center",
    gap: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%", // Full width
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "BebasNeue_400Regular",
  },
  closeButton: {
    fontSize: 18,
    color: "red",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  bottomText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "#474747",
    lineHeight: 20,
  },
  colorText: {
    color: "#4C9FFF",
  },
  input: {},
});
