import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const LogOut = () => {
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
          d="M6.00205 10.5024V11.7527C6.00205 12.0843 6.13378 12.4023 6.36825 12.6367C6.60272 12.8712 6.92073 13.0029 7.25233 13.0029H13.2536C13.5852 13.0029 13.9032 12.8712 14.1377 12.6367C14.3722 12.4023 14.5039 12.0843 14.5039 11.7527L14.5039 4.25102C14.5039 3.91943 14.3722 3.60142 14.1377 3.36695C13.9032 3.13248 13.5852 3.00075 13.2536 3.00075H7.25233C6.92073 3.00075 6.60272 3.13248 6.36825 3.36695C6.13378 3.60142 6.00205 3.91943 6.00205 4.25102V5.5013"
          stroke="black"
          stroke-width="1.00189"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.0011 10.5022L1.5002 8.0013L4.0011 5.50039"
          stroke="black"
          stroke-width="1.00189"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.0336 8.00146L1.50052 8.00146"
          stroke="black"
          stroke-width="1.00189"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LogOut;
