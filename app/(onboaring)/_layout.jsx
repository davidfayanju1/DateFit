import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="landing" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="verification1" options={{ headerShown: false }} />
      <Stack.Screen name="kyc" options={{ headerShown: false }} />
      <Stack.Screen name="thankyou" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
