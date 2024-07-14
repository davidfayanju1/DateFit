import { View, Text, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "../../assets/svgs/Search";
import tw from "twrnc";
const Search = ({
  value,
  placeholder,
  handleChangeText,
  placeholdercolor,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={tw`${containerStyle}`}>
      <View
        style={tw`flex-row bg-[#E5E5EA] items-center justify-start rounded-[6px] w-full h-[3.2rem]`}
      >
        <TextInput
          style={tw`h-full text-gray-700 px-[1rem] w-[90%] text-[1.1rem] ${inputStyle}`}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor={placeholdercolor}
        />
        <SearchIcon />
      </View>
    </View>
  );
};

export default Search;
