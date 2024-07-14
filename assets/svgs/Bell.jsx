import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const Bell = () => {
  return (
    <View>
      <Svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.7023 3.68665C9.39234 3.68665 6.70234 6.37665 6.70234 9.68665V12.5766C6.70234 13.1866 6.44234 14.1166 6.13234 14.6366L4.98234 16.5466C4.27234 17.7266 4.76234 19.0366 6.06234 19.4766C10.3723 20.9166 15.0223 20.9166 19.3323 19.4766C20.5423 19.0766 21.0723 17.6466 20.4123 16.5466L19.2623 14.6366C18.9623 14.1166 18.7023 13.1866 18.7023 12.5766V9.68665C18.7023 6.38665 16.0023 3.68665 12.7023 3.68665Z"
          stroke="white"
          stroke-width="1.50882"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <Path
          d="M14.5523 3.97655C14.2423 3.88655 13.9223 3.81655 13.5923 3.77655C12.6323 3.65655 11.7123 3.72655 10.8523 3.97655C11.1423 3.23655 11.8623 2.71655 12.7023 2.71655C13.5423 2.71655 14.2623 3.23655 14.5523 3.97655Z"
          stroke="white"
          stroke-width="1.50882"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.7024 19.8367C15.7024 21.4867 14.3524 22.8367 12.7024 22.8367C11.8824 22.8367 11.1224 22.4967 10.5824 21.9567C10.0424 21.4167 9.70239 20.6567 9.70239 19.8367"
          stroke="white"
          stroke-width="1.50882"
          stroke-miterlimit="10"
        />
      </Svg>
    </View>
  );
};

export default Bell;
