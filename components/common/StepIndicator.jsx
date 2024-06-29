import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  User,
  Camera,
  Interest,
} from "../../assets/svgs/auth/VerificationSvgs";

const StepIndicator = ({ currentStep }) => {
  return (
    <View style={tw`flex-row justify-center my-[1rem]`}>
      <View style={tw`flex-row items-center justify-center h-[5rem]`}>
        <View
          style={tw`items-center justify-center rounded-full h-[3rem] w-[3rem] ${
            currentStep === 1 ? "bg-[#007AFF]" : "bg-[#8A8A8E]"
          }`}
        >
          <User />
        </View>
        <Text
          style={tw`w-23 ${
            currentStep === 2 ? "bg-[#007AFF]" : "bg-[#8A8A8E]"
          } h-[.1rem]`}
        ></Text>
      </View>

      <View style={tw`flex-row items-center justify-center h-[5rem]`}>
        <View
          style={tw`items-center justify-center rounded-full h-[3rem] w-[3rem] ${
            currentStep === 2 ? "bg-[#007AFF]" : "bg-[#8A8A8E]"
          }`}
        >
          <Camera />
        </View>
        <Text
          style={tw`w-23 ${
            currentStep === 3 ? "bg-[#007AFF]" : "bg-[#8A8A8E]"
          } h-[.1rem]`}
        ></Text>
      </View>

      <View style={tw`flex-row items-center justify-center h-[5rem]`}>
        <View
          style={tw`items-center justify-center rounded-full h-[3rem] w-[3rem] ${
            currentStep === 3 ? "bg-[#007AFF]" : "bg-[#8A8A8E]"
          }`}
        >
          <Interest />
        </View>
      </View>
    </View>
  );
};

export default StepIndicator;
