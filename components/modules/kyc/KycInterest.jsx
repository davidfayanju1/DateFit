import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Button from "../../common/Button";
import { router } from "expo-router";

const KycInterest = ({ setCurrentStep }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    { id: 1, name: "Games" },
    { id: 2, name: "Music" },
    { id: 3, name: "Anime" },
    { id: 4, name: "Tech" },
    { id: 5, name: "Comics" },
    { id: 6, name: "Fashion" },
    { id: 7, name: "Movies" },
    { id: 8, name: "Sports" },
    { id: 9, name: "Travel" },
  ];

  const handleAddInterest = (item) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests((prev) =>
        prev.filter((interest) => interest !== item)
      );
    } else {
      setSelectedInterests((prev) => [...prev, item]);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={tw`flex-1 justify-start items-center py-[2rem]`}
    >
      <View style={tw`flex flex-row flex-wrap justify-center`}>
        {interests.map((item) => (
          <TouchableOpacity
            onPress={() => handleAddInterest(item.name)}
            key={item.id}
            style={tw`border border-blue-500 rounded-full w-[9rem] py-3 m-2 ${
              selectedInterests.includes(item.name) ? "bg-blue-300" : ""
            }`}
          >
            <Text style={tw`text-center text-[1.1rem] text-black`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        disabled={selectedInterests.length <= 2 ? true : false}
        style={tw`w-full mt-4 ${
          selectedInterests.length <= 2 ? "bg-[#CCE4FF]" : "bg-[#007AFF]"
        } flex items-center justify-center h-[3rem] rounded-md`}
        onPress={() => router.push("/thankyou")}
      >
        <Text style={tw`text-white font-semibold text-xl`}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default KycInterest;
