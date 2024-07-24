import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[profilePage]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PageLayout;