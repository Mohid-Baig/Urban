import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const InputComponent = ({
  label,
  IconComponent,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {IconComponent && <IconComponent style={styles.icon} />}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          placeholder={` ${label.toLowerCase()}`}
          placeholderTextColor="#aaa"
        />
        {label === "Password" && (
          <TouchableOpacity onPress={toggleSecureEntry}>
            <FontAwesome
              name={isSecure ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgba(238, 238, 238, 1)",
  },
  icon: {
    marginRight: 10,
    color: "#888",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default InputComponent;
