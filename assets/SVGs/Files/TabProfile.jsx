import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const TabProfile = ({ color }) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.5 2.08325C9.77081 2.08325 7.55206 4.302 7.55206 7.03117C7.55206 9.70825 9.64581 11.8749 12.375 11.9687C12.4583 11.9583 12.5416 11.9583 12.6041 11.9687C12.625 11.9687 12.6354 11.9687 12.6562 11.9687C12.6666 11.9687 12.6666 11.9687 12.6771 11.9687C15.3437 11.8749 17.4375 9.70825 17.4479 7.03117C17.4479 4.302 15.2291 2.08325 12.5 2.08325Z"
      fill={color}
    />
    <Path
      d="M17.7917 14.7395C14.8854 12.802 10.1459 12.802 7.21877 14.7395C5.89585 15.6249 5.16669 16.8228 5.16669 18.1041C5.16669 19.3853 5.89585 20.5728 7.20835 21.4478C8.66669 22.427 10.5834 22.9166 12.5 22.9166C14.4167 22.9166 16.3334 22.427 17.7917 21.4478C19.1042 20.5624 19.8334 19.3749 19.8334 18.0833C19.8229 16.802 19.1042 15.6145 17.7917 14.7395Z"
      fill={color}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_129_1429"
        x1={12.5}
        y1={2.08325}
        x2={12.5}
        y2={11.9687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_129_1429"
        x1={12.5}
        y1={13.2864}
        x2={12.5}
        y2={22.9166}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TabProfile;
