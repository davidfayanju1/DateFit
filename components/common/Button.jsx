import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Button = ({ text, disabled, handlePress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={tw`${containerStyle} bg-[#007AFF] h-[3rem] items-center justify-center`}
    >
      <Text style={tw`${textStyle} text-white`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
