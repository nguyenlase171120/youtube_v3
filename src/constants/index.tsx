import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";
export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "JS Mastery", icon: <CodeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export const listMenuCommon = [
  {
    group: [
      {
        firstIcon: <NightlightIcon fontSize="small" />,
        text: "Appearance: Device theme",
        secondIcon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        firstIcon: <TranslateIcon fontSize="small" />,
        text: "Language: British English",
        secondIcon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        firstIcon: <AdminPanelSettingsIcon fontSize="small" />,
        text: "Restricted mode: Off",
        secondIcon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        firstIcon: <LanguageIcon fontSize="small" />,
        text: "Location: Vietnam",
        secondIcon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        firstIcon: <KeyboardAltOutlinedIcon fontSize="small" />,
        text: "Keyboard shortcut",
      },
    ],
  },
  {
    group: [
      {
        firstIcon: <SettingsIcon fontSize="small" />,
        text: "Settings",
      },
    ],
  },
  {
    group: [
      {
        firstIcon: <HelpOutlineIcon fontSize="small" />,
        text: "Help",
      },
      {
        firstIcon: <FeedbackOutlinedIcon fontSize="small" />,
        text: "Send Feedback",
      },
    ],
  },
];
