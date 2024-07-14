import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const About = () => {
  return (
    <View>
      <Svg
        width="22"
        height="22"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M7.99999 1.33329C4.33332 1.33329 1.33332 4.33329 1.33332 7.99996C1.33332 11.6666 4.33332 14.6666 7.99999 14.6666C11.6667 14.6666 14.6667 11.6666 14.6667 7.99996C14.6667 4.33329 11.6667 1.33329 7.99999 1.33329Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 10.6666V7.33329"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.00366 5.33337H7.99767"
          stroke="#292D32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default About;
