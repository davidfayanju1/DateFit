import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthProvider } from "../AuthContext";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(onboaring)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
