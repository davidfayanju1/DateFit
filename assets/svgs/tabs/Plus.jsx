import { View, Text } from "react-native";
import React from "react";
import Svg, { G, Rect, Circle, Path, Defs, ClipPath } from "react-native-svg";
import tw from "twrnc";

const Plus = () => {
  return (
    <View>
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_81_2526)">
          <Rect width="20" height="20" rx="10" fill="white" />
          <Circle cx="10" cy="10" r="8" fill="#007AFF" />
          <Path
            d="M6 10H14"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M10 14V6"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_81_2526">
            <Rect width="20" height="20" rx="10" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default Plus;
