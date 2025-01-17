import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

export const HomeIcon = ({ focused }) => {
  if (focused) {
    return (
      <View>
        <Svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M21.58 8.01002L15.03 2.77002C13.75 1.75002 11.75 1.74002 10.48 2.76002L3.92996 8.01002C2.98996 8.76002 2.41996 10.26 2.61996 11.44L3.87996 18.98C4.16996 20.67 5.73996 22 7.44996 22H18.05C19.74 22 21.34 20.64 21.63 18.97L22.89 11.43C23.07 10.26 22.5 8.76002 21.58 8.01002ZM13.5 18C13.5 18.41 13.16 18.75 12.75 18.75C12.34 18.75 12 18.41 12 18V15C12 14.59 12.34 14.25 12.75 14.25C13.16 14.25 13.5 14.59 13.5 15V18Z"
            fill="#007AFF"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.75 18V15"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.82 2.82009L3.88999 8.37009C3.10999 8.99009 2.60999 10.3001 2.77999 11.2801L4.10999 19.2401C4.34999 20.6601 5.70999 21.8101 7.14999 21.8101H18.35C19.78 21.8101 21.15 20.6501 21.39 19.2401L22.72 11.2801C22.88 10.3001 22.38 8.99009 21.61 8.37009L14.68 2.83009C13.61 1.97009 11.88 1.97009 10.82 2.82009Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const ChatsIcon = ({ focused }) => {
  if (focused) {
    return (
      <View>
        <Svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M18.72 16.83L19.11 19.99C19.21 20.82 18.32 21.4 17.61 20.97L14.15 18.91C13.91 18.77 13.85 18.47 13.98 18.23C14.48 17.31 14.75 16.27 14.75 15.23C14.75 11.57 11.61 8.59 7.74999 8.59C6.95999 8.59 6.18999 8.71 5.46999 8.95C5.09999 9.07 4.73999 8.73 4.82999 8.35C5.73999 4.71 9.23999 2 13.42 2C18.3 2 22.25 5.69 22.25 10.24C22.25 12.94 20.86 15.33 18.72 16.83Z"
            fill="#007AFF"
          />
          <Path
            d="M13.25 15.2301C13.25 16.4201 12.81 17.5201 12.07 18.3901C11.08 19.5901 9.51 20.3601 7.75 20.3601L5.14 21.9101C4.7 22.1801 4.14 21.8101 4.2 21.3001L4.45 19.3301C3.11 18.4001 2.25 16.9101 2.25 15.2301C2.25 13.4701 3.19 11.9201 4.63 11.0001C5.52 10.4201 6.59 10.0901 7.75 10.0901C10.79 10.0901 13.25 12.3901 13.25 15.2301Z"
            fill="#007AFF"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18.72 16.83L19.11 19.99C19.21 20.82 18.32 21.4 17.61 20.97L13.42 18.48C12.96 18.48 12.51 18.45 12.07 18.39C12.81 17.52 13.25 16.42 13.25 15.23C13.25 12.39 10.79 10.09 7.74997 10.09C6.58997 10.09 5.51997 10.42 4.62997 11C4.59997 10.75 4.58997 10.5 4.58997 10.24C4.58997 5.68999 8.53997 2 13.42 2C18.3 2 22.25 5.68999 22.25 10.24C22.25 12.94 20.86 15.33 18.72 16.83Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.25 15.23C13.25 16.42 12.81 17.5201 12.07 18.3901C11.08 19.5901 9.51 20.36 7.75 20.36L5.14 21.91C4.7 22.18 4.14 21.81 4.2 21.3L4.45 19.3301C3.11 18.4001 2.25 16.91 2.25 15.23C2.25 13.47 3.19 11.9201 4.63 11.0001C5.52 10.4201 6.59 10.0901 7.75 10.0901C10.79 10.0901 13.25 12.39 13.25 15.23Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const ProfileIcon = ({ focused }) => {
  if (focused) {
    return (
      <View>
        <Svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12.75 2C10.13 2 8 4.13 8 6.75C8 9.32 10.01 11.4 12.63 11.49C12.71 11.48 12.79 11.48 12.85 11.49C12.87 11.49 12.88 11.49 12.9 11.49C12.91 11.49 12.91 11.49 12.92 11.49C15.48 11.4 17.49 9.32 17.5 6.75C17.5 4.13 15.37 2 12.75 2Z"
            fill="#007AFF"
          />
          <Path
            d="M17.83 14.1499C15.04 12.2899 10.49 12.2899 7.68002 14.1499C6.41002 14.9999 5.71002 16.1499 5.71002 17.3799C5.71002 18.6099 6.41002 19.7499 7.67002 20.5899C9.07002 21.5299 10.91 21.9999 12.75 21.9999C14.59 21.9999 16.43 21.5299 17.83 20.5899C19.09 19.7399 19.79 18.5999 19.79 17.3599C19.78 16.1299 19.09 14.9899 17.83 14.1499Z"
            fill="#007AFF"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.91 10.87C12.81 10.86 12.69 10.86 12.58 10.87C10.2 10.79 8.31 8.84 8.31 6.44C8.31 3.99 10.29 2 12.75 2C15.2 2 17.19 3.99 17.19 6.44C17.18 8.84 15.29 10.79 12.91 10.87Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.91 14.56C5.49 16.18 5.49 18.82 7.91 20.43C10.66 22.27 15.17 22.27 17.92 20.43C20.34 18.81 20.34 16.17 17.92 14.56C15.18 12.73 10.67 12.73 7.91 14.56Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export const ExploreIcon = ({ focused }) => {
  if (focused) {
    return (
      <View>
        <Svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M22.9 18.13C22.8 17.73 22.4 17.48 22 17.58C21.6 17.68 21.35 18.08 21.44 18.48C21.48 18.65 21.5 18.82 21.5 19C21.5 20.24 20.49 21.25 19.25 21.25C18.01 21.25 17 20.24 17 19C17 17.9 17.79 16.99 18.84 16.79C18.74 17.02 18.75 17.3 18.91 17.52C19.06 17.72 19.29 17.83 19.52 17.83C19.67 17.83 19.83 17.78 19.96 17.69L21.13 16.84C21.14 16.83 21.14 16.82 21.15 16.82C21.16 16.81 21.17 16.81 21.18 16.8C21.21 16.77 21.23 16.74 21.25 16.7C21.28 16.66 21.32 16.63 21.34 16.58C21.36 16.54 21.37 16.49 21.39 16.45C21.4 16.4 21.42 16.36 21.43 16.31C21.44 16.26 21.43 16.22 21.42 16.17C21.42 16.12 21.42 16.07 21.4 16.02C21.39 15.97 21.36 15.93 21.34 15.89C21.32 15.85 21.31 15.81 21.29 15.78C21.28 15.77 21.27 15.77 21.26 15.76C21.25 15.76 21.25 15.75 21.25 15.74L20.25 14.59C19.98 14.28 19.5 14.24 19.19 14.52C18.97 14.72 18.89 15.01 18.97 15.28C17.04 15.43 15.51 17.03 15.51 19C15.51 21.07 17.19 22.75 19.26 22.75C21.33 22.75 23.01 21.07 23.01 19C23 18.71 22.97 18.41 22.9 18.13Z"
            fill="#007AFF"
          />
          <Path
            d="M2.28001 14.6299C2.28001 14.6599 2.26001 14.6999 2.26001 14.7299C3.18001 16.5699 4.68001 18.0799 6.52001 18.9899C6.55001 18.9899 6.59001 18.9699 6.62001 18.9699C6.28001 17.8099 6.02001 16.6199 5.83001 15.4299C4.63001 15.2299 3.44001 14.9699 2.28001 14.6299Z"
            fill="#007AFF"
          />
          <Path
            d="M19.32 6.42994C18.38 4.45994 16.79 2.86994 14.83 1.93994C15.19 3.12994 15.49 4.34994 15.69 5.56994C16.91 5.76994 18.13 6.05994 19.32 6.42994Z"
            fill="#007AFF"
          />
          <Path
            d="M2.17999 6.43002C3.37999 6.07002 4.59999 5.77002 5.81999 5.57002C6.01999 4.38002 6.26999 3.20002 6.60999 2.04002C6.57999 2.04002 6.53999 2.02002 6.50999 2.02002C4.62999 2.95002 3.09999 4.52002 2.17999 6.43002Z"
            fill="#007AFF"
          />
          <Path
            d="M14.07 5.36C13.83 4.06 13.53 2.76 13.1 1.5C13.08 1.43 13.08 1.37 13.07 1.29C12.33 1.11 11.55 1 10.75 1C9.93999 1 9.16999 1.11 8.41999 1.3C8.40999 1.37 8.41999 1.43 8.39999 1.51C7.97999 2.77 7.66999 4.06 7.42999 5.36C9.63999 5.12 11.86 5.12 14.07 5.36Z"
            fill="#007AFF"
          />
          <Path
            d="M5.61 7.17993C4.3 7.41993 3.02 7.72993 1.75 8.14993C1.68 8.16993 1.62 8.16993 1.55 8.17993C1.36 8.91993 1.25 9.69993 1.25 10.4999C1.25 11.3099 1.36 12.0799 1.55 12.8299C1.62 12.8399 1.68 12.8299 1.76 12.8499C3.02 13.2699 4.31 13.5799 5.62 13.8199C5.37 11.6099 5.37 9.38993 5.61 7.17993Z"
            fill="#007AFF"
          />
          <Path
            d="M19.95 8.17993C19.88 8.17993 19.82 8.16993 19.74 8.14993C18.48 7.72993 17.18 7.41993 15.88 7.17993C16.13 9.38993 16.13 11.6099 15.88 13.8099C17.18 13.5699 18.48 13.2699 19.74 12.8399C19.81 12.8199 19.87 12.8299 19.95 12.8199C20.13 12.0699 20.25 11.2999 20.25 10.4899C20.25 9.69993 20.14 8.92993 19.95 8.17993Z"
            fill="#007AFF"
          />
          <Path
            d="M7.42999 15.6399C7.66999 16.9499 7.96999 18.2399 8.39999 19.4999C8.41999 19.5699 8.40999 19.6299 8.41999 19.7099C9.16999 19.8899 9.93999 19.9999 10.75 19.9999C11.55 19.9999 12.33 19.8899 13.07 19.6999C13.08 19.6299 13.08 19.5699 13.1 19.4899C13.52 18.2299 13.83 16.9399 14.07 15.6299C12.97 15.7499 11.86 15.8399 10.75 15.8399C9.63999 15.8399 8.52999 15.7599 7.42999 15.6399Z"
            fill="#007AFF"
          />
          <Path
            d="M7.20001 6.9501C6.90001 9.3101 6.90001 11.6901 7.20001 14.0601C9.56001 14.3601 11.94 14.3601 14.31 14.0601C14.61 11.7001 14.61 9.3201 14.31 6.9501C11.94 6.6501 9.56001 6.6501 7.20001 6.9501Z"
            fill="#007AFF"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M22.25 12C22.25 6.48 17.77 2 12.25 2C6.73 2 2.25 6.48 2.25 12C2.25 17.52 6.73 22 12.25 22"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.24998 3H9.24998C7.29998 8.84 7.29998 15.16 9.24998 21H8.24998"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.25 3C16.22 5.92 16.71 8.96 16.71 12"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.25 16V15C6.17 15.97 9.21 16.46 12.25 16.46"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.25 9.0001C9.09 7.0501 15.41 7.0501 21.25 9.0001"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.75 14.7C19.38 14.59 18.96 14.52 18.5 14.52C16.43 14.52 14.76 16.2 14.76 18.26C14.76 20.33 16.44 22 18.5 22C20.56 22 22.24 20.32 22.24 18.26C22.24 17.49 22.01 16.77 21.61 16.18"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20.29 14.8001L19.04 13.3701"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20.29 14.8L18.83 15.86"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
