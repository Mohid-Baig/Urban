import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import MailIcon from "../../assets/SVGs/Files/MailIcon";
import LockIcon from "../../assets/SVGs/Files/PasswordIcon";
import MainLogo from "../../assets/SVGs/Files/MainLogo";
import { HelloWave } from "../../components/HelloWave";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import CustomButton from "../../components/CustomButton/CustomButton";
import SVGImages from "../../assets/SVGs/index"; // Ensure this path is correct
import MyCheckbox from "../../components/MyCheckbox/MyCheckbox";
import { router } from "expo-router";

const OtherLogin = [
  {
    id: 1,
    icon: <SVGImages.SocialIcon.GoogleIcon />,
    text: "Sign In with Google",
  },
  {
    id: 2,
    icon: <SVGImages.SocialIcon.AppleIcon />, // Assuming you have AppleIcon
    text: "Sign In with Apple",
  },
  {
    id: 3,
    icon: <SVGImages.SocialIcon.FacebookIcon />,
    text: "Sign In with Facebook",
  },
];

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Adding useEffect to ensure HelloWave only runs once on mount
  useEffect(() => {
    // Place any side-effect logic here if needed.
  }, []);

  return (
    <View style={styles.container}>
      <MainLogo style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Your Place</Text>
        <HelloWave />
      </View>
      <Text style={styles.subtitle}>
        Sign up now to gain access to member-only discounts and personalized
        recommendations.
      </Text>

      <InputComponent
        label="Email"
        IconComponent={MailIcon}
        value={email}
        onChangeText={setEmail}
      />
      <InputComponent
        label="Password"
        IconComponent={LockIcon}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.toggleContainer}>
        <MyCheckbox />
        <Text style={styles.toggleText}>
          By clicking the Register button, you agree to the public offer
        </Text>
      </View>
      <CustomButton
        text="SignUp"
        onPress={() => {
          router.push("AddLocation");
        }}
      />
      <Text style={styles.otherLoginText}>Or Sign Up With</Text>
      <View style={styles.otherLoginContainer}>
        {OtherLogin.map((item) => (
          <TouchableOpacity key={item.id} style={styles.otherLoginButton}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.otherLoginButtonText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.signUpTextContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/Login");
          }}
        >
          <Text style={styles.signUpLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "BebasNeue_400Regular",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
    color: "#666",
    fontFamily: "Montserrat_400Regular",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  toggleText: {
    marginLeft: 10,
    fontSize: 14,
    color: "black",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 10,
  },
  otherLoginText: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    color: "#ccc",
  },
  otherLoginContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  otherLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "rgba(238, 238, 238, 1)",
    height: 50,
    justifyContent: "center",
    width: "100%",
    borderRadius: 5,
  },
  otherLoginButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 5,
  },
  signUpText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  signUpLink: {
    color: "black",
    fontWeight: "Montserrat_700Bold",
  },
  signUpTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
