import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";

export default function VerificationModal({ isVisible, onClose, onVerify }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input if the current box is filled
      if (text && index < 3) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (key, index) => {
    // Handle backspace to move to the previous input
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

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
            <Text style={styles.title}>Verify OTP</Text>
            <View></View>
          </View>
          <Text style={styles.description}>
            Enter the 4 digits code that you received on your email.
          </Text>
          <View style={styles.inputContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                style={styles.input}
                placeholder="0"
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, index)
                }
                keyboardType="numeric"
                maxLength={1}
                autoFocus={index === 0} // Focus on the first input initially
              />
            ))}
          </View>
          <CustomButton text="Verify" onPress={onVerify} />

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 24,
    marginHorizontal: 5,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
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
});
