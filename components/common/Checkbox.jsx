import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Check from "../../assets/svgs/Check";
import tw from "twrnc";

const Checkbox = ({ pressed, handlePressed }) => {
  return (
    <TouchableOpacity
      onPress={handlePressed}
      style={tw`border-solid mb-[2rem] border-[1px] border-gray-500 h-[1.5rem] w-[1.5rem] rounded-[6px]`}
    >
      <View style={tw`items-center flex-row justify-center w-full h-full`}>
        {pressed && <Check />}
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
