import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import Dating from "../../assets/images/Dating.png";
import GenZ from "../../assets/images/GenZ.png";
import Group28 from "../../assets/images/Group28.png";
import { useRouter } from "expo-router";
import { useAuth } from "../../AuthContext";

const slides = [
  {
    key: "one",
    title: "Date Fit",
    text: "Contemporary Dating for Teens",
    subText: "A modern day dating platform for Teenagers and other Gen-z’s ",
    image: GenZ,
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Date Fit",
    text: "Create new friends, Discover love",
    subText:
      "Our algorithm helps in carefully choosing friends & mates that match your interests.",
    image: Dating,
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Date Fit",
    text: "Easy Supervision & Guidance",
    subText:
      "We assist you in keeping your actions in sync with your guardian.",
    image: Group28,
    backgroundColor: "#22bcb5",
  },
];

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("User detected, redirecting to /verification1");
      router.push("/verification1");
    } else {
      console.log("No user detected");
    }
  }, [user, router]);
  console.log(user);

  const renderItem = ({ item }) => (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-[#007AFF] font-bold text-2xl mb-[2rem]`}>
        {item.title}
      </Text>
      <Image
        source={item.image}
        style={tw`w-[18rem] h-[18rem] self-center`}
        resizeMode="contain"
      />
      <Text style={tw`font-semibold text-lg text-center mt-4`}>
        {item.text}
      </Text>
      <Text style={tw`w-4/5 text-center text-base`}>{item.subText}</Text>
    </View>
  );

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDone = () => {
    router.push("/signup");
  };

  const renderNextButton = () => (
    <TouchableOpacity
      style={tw`p-4 bg-[#007AFF] rounded-md`}
      onPress={handleNext}
    >
      <Text style={tw`text-white text-center font-bold`}>Next</Text>
    </TouchableOpacity>
  );

  const renderSkipButton = () => (
    <TouchableOpacity
      onPress={() => router.push("/login")}
      style={tw`p-4 rounded-md`}
    >
      <Text style={tw`text-black text-center font-bold`}>Skip</Text>
    </TouchableOpacity>
  );

  const renderDoneButton = () => (
    <TouchableOpacity
      onPress={handleDone}
      style={tw`p-4 bg-[#007AFF] rounded-md w-full`}
    >
      <Text style={tw`text-white text-center font-bold`}>Get Started</Text>
    </TouchableOpacity>
  );

  const renderPagination = () => (
    <View style={tw`flex-row justify-center items-center mt-4`}>
      {slides.map((_, i) => (
        <View
          key={i}
          style={[
            tw`w-3 h-3 rounded-full mx-1`,
            { backgroundColor: i === activeIndex ? "#007AFF" : "#C4C4C4" },
          ]}
        />
      ))}
    </View>
  );

  const renderCustomButtons = () => (
    <View
      style={tw`flex-row justify-between mb-[3rem] items-center w-full px-[1rem] mt-4`}
    >
      <View>{activeIndex !== slides.length - 1 && renderSkipButton()}</View>
      {activeIndex === slides.length - 1
        ? renderDoneButton()
        : renderNextButton()}
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <ScrollView contentContainerStyle={tw`flex-1 pt-[1.5rem]`}>
        <View style={tw`flex-1`}>
          {renderItem({ item: slides[activeIndex] })}
        </View>
        <View style={tw`w-full my-[1rem]`}>{renderPagination()}</View>
        {renderCustomButtons()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
