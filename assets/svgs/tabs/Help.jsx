import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const Help = () => {
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
          d="M8.00157 2.49976C6.91353 2.49976 5.84993 2.8224 4.94527 3.42687C4.0406 4.03135 3.3355 4.89052 2.91912 5.89574C2.50275 6.90095 2.39381 8.00706 2.60607 9.07419C2.81834 10.1413 3.34228 11.1215 4.11163 11.8909C4.88099 12.6602 5.86121 13.1842 6.92834 13.3964C7.99547 13.6087 9.10157 13.4998 10.1068 13.0834C11.112 12.667 11.9712 11.9619 12.5756 11.0573C13.1801 10.1526 13.5028 9.08899 13.5028 8.00095C13.5028 6.54195 12.9232 5.14269 11.8915 4.11102C10.8598 3.07934 9.46058 2.49976 8.00157 2.49976Z"
          stroke="black"
          stroke-width="1.00189"
          stroke-miterlimit="10"
        />
        <Path
          d="M6.25104 6.3223C6.25104 6.3223 6.2773 5.77523 6.86282 5.30412C7.21013 5.02433 7.62653 4.94336 8.00167 4.93774C8.34335 4.93336 8.64846 4.98994 8.83103 5.07685C9.14364 5.22565 9.7523 5.58891 9.7523 6.36138C9.7523 7.17417 9.22086 7.54336 8.61533 7.94945C8.0098 8.35553 7.84536 8.79632 7.84536 9.25179"
          stroke="black"
          stroke-width="1.00189"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <Path
          d="M7.81763 11.5085C8.16455 11.5085 8.44578 11.2273 8.44578 10.8803C8.44578 10.5334 8.16455 10.2522 7.81763 10.2522C7.47072 10.2522 7.18948 10.5334 7.18948 10.8803C7.18948 11.2273 7.47072 11.5085 7.81763 11.5085Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

export default Help;
