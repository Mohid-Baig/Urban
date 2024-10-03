import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const LeftArrow = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.175 14.0001H14.948C14.882 12.0921 14.629 10.3711 14.186 9.9271C13.623 9.3641 12.69 9.6501 11.938 9.9611C10.367 10.6111 5.82495 13.3571 5.82495 15.0071C5.82495 16.7101 10.572 19.4451 12.013 20.0421C12.464 20.2291 12.946 20.3941 13.374 20.3941C13.683 20.3941 13.964 20.3091 14.187 20.0851C14.631 19.6391 14.884 17.9121 14.949 16.0001H23.175C23.728 16.0001 24.175 15.5531 24.175 15.0001C24.175 14.4471 23.728 14.0001 23.175 14.0001Z"
      fill="url(#paint0_linear_18_3436)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_18_3436"
        x1={15}
        y1={9.60593}
        x2={15}
        y2={20.3941}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474747" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LeftArrow;
