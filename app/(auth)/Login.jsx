import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import MailIcon from "../../assets/SVGs/Files/MailIcon";
import LockIcon from "../../assets/SVGs/Files/PasswordIcon";
import MainLogo from "../../assets/SVGs/Files/MainLogo";
import { HelloWave } from "../../components/HelloWave";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import CustomButton from "../../components/CustomButton/CustomButton";
import SVGImages from "../../assets/SVGs/index";
import { router } from "expo-router";
import ForgotPasswordModal from "../../components/Modal/ForgotPasswordModal";
import VerificationModal from "../../components/Modal/VerificationModal";
import ResetPasswordModal from "../../components/Modal/ResetPasswordModal";
import SuccessModal from "../../components/Modal/SuccessModal";

const OtherLogin = [
  {
    id: 1,
    icon: <SVGImages.SocialIcon.GoogleIcon />,
    text: "Sign In with Google",
  },
  {
    id: 2,
    icon: <SVGImages.SocialIcon.AppleIcon />,
    text: "Sign In with Apple",
  },
  {
    id: 3,
    icon: <SVGImages.SocialIcon.FacebookIcon />,
    text: "Sign In with Facebook",
  },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [currentModal, setCurrentModal] = useState(null);

  const openForgotPassword = () => {
    setCurrentModal("forgotPassword");
  };

  const openVerification = () => {
    setCurrentModal("verification");
  };

  const openResetPassword = () => {
    setCurrentModal("resetPassword");
  };

  const successModal = () => {
    setCurrentModal("success");
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleLogin = () => {
    router.push("/Home");
  };

  return (
    <View style={styles.container}>
      <MainLogo style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <HelloWave />
      </View>
      <Text style={styles.subtitle}>
        We're glad to see you again. Log in to access your account and explore
        our latest features.
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
        <ToggleSwitch label="Remember Me" />
        <TouchableOpacity onPress={openForgotPassword}>
          <Text style={styles.toggleText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <CustomButton text="Login" onPress={handleLogin} />
      <Text style={styles.otherLoginText}>Or Sign in With</Text>
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
            router.push("/SignUp");
          }}
        >
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {currentModal === "forgotPassword" && (
        <ForgotPasswordModal
          isVisible={true}
          onClose={closeModal}
          onSubmit={openVerification} // Navigate to VerificationModal
        />
      )}
      {currentModal === "verification" && (
        <VerificationModal
          isVisible={true}
          onClose={closeModal}
          onVerify={openResetPassword} // Navigate to ResetPasswordModal
        />
      )}
      {currentModal === "resetPassword" && (
        <ResetPasswordModal
          isVisible={true}
          onClose={closeModal}
          onVerify={successModal}
        />
      )}
      {currentModal === "success" && (
        <SuccessModal isVisible={true} onClose={closeModal} />
      )}
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
  },
  otherLoginText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
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
