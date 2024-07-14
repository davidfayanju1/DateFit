import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const Location = () => {
  return (
    <View>
      <Svg
        width="17"
        height="17"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M5.03844 5.59585C5.76101 5.59585 6.34677 5.01382 6.34677 4.29585C6.34677 3.57788 5.76101 2.99585 5.03844 2.99585C4.31586 2.99585 3.7301 3.57788 3.7301 4.29585C3.7301 5.01382 4.31586 5.59585 5.03844 5.59585Z"
          stroke="#292D32"
          stroke-width="1.5"
        />
        <Path
          d="M1.5244 3.53742C2.3505 -0.0709137 7.7306 -0.066747 8.5525 3.54159C9.03474 5.65825 7.70963 7.44992 6.54807 8.55825C5.7052 9.36659 4.37171 9.36659 3.52464 8.55825C2.36727 7.44992 1.04217 5.65409 1.5244 3.53742Z"
          stroke="#292D32"
          stroke-width="1.5"
        />
      </Svg>
    </View>
  );
};

export default Location;
