import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Dropdown } from "react-native-element-dropdown";

const CustomDown = ({
  label,
  data,
  placeholder,
  value,
  handleTextChange,
  containerStyle,
}) => {
  return (
    <View style={tw`${containerStyle}`}>
      <Text style={tw`text-lg mb-2`}>{label}</Text>
      <View style={tw`border border-[#1C1C1C]/30 h-[3.2rem] rounded-md w-full`}>
        <Dropdown
          style={tw`h-[3.2rem] w-full px-4 py-2`}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onChange={handleTextChange}
        />
      </View>
    </View>
  );
};

export default CustomDown;
