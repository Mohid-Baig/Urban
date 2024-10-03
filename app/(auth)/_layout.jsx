import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" />
        <Stack.Screen name="SignUp" />
        <Stack.Screen name="AddLocation" />
        <Stack.Screen name="SelectCategory" />
      </Stack>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({});
