import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Password from "../../assets/svgs/auth/Password";
import Feather from "@expo/vector-icons/Feather";

const Form = ({
  title,
  value,
  placeholder,
  label,
  handleChangeText,
  placeholdercolor,
  containerStyle,
  inputStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={tw`${containerStyle}`}>
      {label && <Text style={tw`text-md mb-2`}>{label}</Text>}
      <View
        style={tw`border-solid ${
          title === "Password" ? "flex-row items-center justify-start" : ""
        } rounded-[6px] border-[#1C1C1C]/30 border-[1px] w-full h-[3.2rem]`}
      >
        <TextInput
          style={tw`h-full px-[1rem] ${
            title === "Password" ? "w-[80%]" : "w-full"
          } text-[1.1rem] ${inputStyle}`}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor={placeholdercolor}
          secureTextEntry={title === "Password" && !togglePassword}
        />
        {title === "Password" && (
          <View style={tw`items-center h-full w-[20%] justify-center`}>
            <TouchableOpacity
              style={tw`items-center justify-center h-full w-full`}
              onPress={() => setTogglePassword(!togglePassword)}
            >
              {togglePassword ? (
                <Feather name="eye" size={19} color="black" />
              ) : (
                <Password />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Form;
