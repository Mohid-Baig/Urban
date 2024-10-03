import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const TabHeart = ({ color }) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.125 3.22925C15.2396 3.22925 13.5521 4.14591 12.5 5.55216C11.4479 4.14591 9.7604 3.22925 7.87498 3.22925C4.67706 3.22925 2.08331 5.83341 2.08331 9.05216C2.08331 10.2917 2.28123 11.4376 2.62498 12.5001C4.27081 17.7084 9.34373 20.823 11.8541 21.6772C12.2083 21.8022 12.7916 21.8022 13.1458 21.6772C15.6562 20.823 20.7291 17.7084 22.375 12.5001C22.7187 11.4376 22.9166 10.2917 22.9166 9.05216C22.9166 5.83341 20.3229 3.22925 17.125 3.22925Z"
      fill={color}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_129_1421"
        x1={12.5}
        y1={3.22925}
        x2={12.5}
        y2={21.7709}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TabHeart;
