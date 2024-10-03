import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const TabSearch = ({ color }) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.4687 20.8541C16.6522 20.8541 20.8541 16.6521 20.8541 11.4687C20.8541 6.28525 16.6522 2.08325 11.4687 2.08325C6.28531 2.08325 2.08331 6.28525 2.08331 11.4687C2.08331 16.6521 6.28531 20.8541 11.4687 20.8541Z"
      fill={color}
    />
    <Path
      d="M22.9063 19.7396C22.5625 19.1042 21.8333 18.75 20.8542 18.75C20.1146 18.75 19.4792 19.0521 19.1042 19.5729C18.7292 20.0938 18.6458 20.7917 18.875 21.4896C19.3229 22.8438 20.1042 23.1458 20.5313 23.1979C20.5938 23.2083 20.6563 23.2083 20.7292 23.2083C21.1875 23.2083 21.8958 23.0104 22.5833 21.9792C23.1354 21.1771 23.2396 20.375 22.9063 19.7396Z"
      fill={color}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_129_1412"
        x1={11.4687}
        y1={2.08325}
        x2={11.4687}
        y2={20.8541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_129_1412"
        x1={20.922}
        y1={18.75}
        x2={20.922}
        y2={23.2083}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TabSearch;
