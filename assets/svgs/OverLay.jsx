import { View, Text } from "react-native";
import React from "react";
import { Svg, Circle } from "react-native-svg";

export const OverLayLeft = () => {
  return (
    <View>
      <Svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="22.1294" cy="53.5293" r="53.3118" fill="#005ECE" />
      </Svg>
    </View>
  );
};

export const OverLayRight = () => {
  return (
    <View>
      <Svg
        width="79"
        height="57"
        viewBox="0 0 79 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="53.8529" cy="3.01757" r="53.3118" fill="#005ECE" />
      </Svg>
    </View>
  );
};
