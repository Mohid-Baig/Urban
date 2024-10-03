import GoogleIcon from "./Images/GoogleLogo.svg";
import FacebookIcon from "./Images/FacebookLogo.svg";
import AppleIcon from "./Images/AppleLogo.svg"; // Assuming you have AppleIcon
import HeartIcon from "./Images/HeartIcon.svg";
import UserBg from "./Images/UserBg.svg";

import BedroomIcon from "./Images/BedIcon.svg";
import RotateImage from "./Images/360.svg";
import WaterIcon from "./Images/BedroomIcon.svg";
import BathroomIcon from "./Images/BathtubIcon.svg";
import LocationIcon from "./Images/LocationIcon.svg";

import ReviewImage from "./Images/ReviewersIcon.svg";
import AddGradeint from "./Images/AddGrdeint.svg";
import DeleteModalIcon from "./Images/DeleteGradient.svg";
const SocialIcon = {
  GoogleIcon: (props) => <GoogleIcon {...props} />,
  FacebookIcon: (props) => <FacebookIcon {...props} />,
  AppleIcon: (props) => <AppleIcon {...props} />, // Add this line
};

const Icons = {
  HeartIcon: (props) => <HeartIcon {...props} />,
  UserBg: (props) => <UserBg {...props} />,
  BedroomIcon: (props) => <BedroomIcon {...props} />,
  RotateImage: (props) => <RotateImage {...props} />,
  WaterIcon: (props) => <WaterIcon {...props} />,
  BathroomIcon: (props) => <BathroomIcon {...props} />,
  LocationIcon: (props) => <LocationIcon {...props} />,
  ReviewImage: (props) => <ReviewImage {...props} />,
  AddGradeint: (props) => <AddGradeint {...props} />,
  DeleteModalIcon: (props) => <DeleteModalIcon {...props} />,
};

const SVGImages = {
  SocialIcon,
  Icons,
};

export default SVGImages;
