import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const Right = () => {
  return (
    <View>
      <Svg
        width="22"
        height="22"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M3.71252 8.29995L6.42919 5.58328C6.75002 5.26245 6.75002 4.73745 6.42919 4.41662L3.71252 1.69995"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Right;
