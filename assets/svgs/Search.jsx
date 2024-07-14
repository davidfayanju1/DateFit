import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
export const SearchIcon = () => {
  return (
    <View>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M7.66665 14C11.1644 14 14 11.1645 14 7.66671C14 4.1689 11.1644 1.33337 7.66665 1.33337C4.16884 1.33337 1.33331 4.1689 1.33331 7.66671C1.33331 11.1645 4.16884 14 7.66665 14Z"
          stroke="#C5C5C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.6666 14.6667L13.3333 13.3334"
          stroke="#C5C5C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SearchIcon;
