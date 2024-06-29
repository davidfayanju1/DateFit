import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Logo from "../assets/svgs/Logo";
import { router } from "expo-router";
import Landing from "./(onboaring)/landing";

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleDone = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Landing onDone={handleDone} />;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(onboaring)/landing");
    }, 3000);

    // Clean up the timeout if the component is unmounted or if useEffect is called again
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <Logo />
    </SafeAreaView>
  );
};

export default App;
