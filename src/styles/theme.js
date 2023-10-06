import backgroundOne from "../assets/5995644.jpg";
import backgroundTwo from "../assets/6241816.jpg";

const theme = {
  "#BD2126": {
    fontFamily: "'Lobster Two', cursive",
    textColor: {
      primary: "text-yellow-500",
      secondary: "text-yellow-300",
      tertiary: "text-yellow-100",
    },
    backgroundImage: `url(${backgroundOne})`,
    container: "container rounded-xl",
    borderColor: "border-yellow-100",
    timerContainer: "max-w-md flex flex-row justify-evenly items-center mx-auto px-100 py-5",
  },
  "#FFB6C1": {
    fontFamily: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    textColor: {
      primary: "text-grey-500",
      secondary: "text-slate-400",
      tertiary: "text-grey-500",
    },
    backgroundImage: `url(${backgroundTwo})`,
    container: "container bg-white backdrop-filter backdrop-blur-lg z-10 bg-opacity-50 border-b border-gray-200 rounded-xl",
    borderColor: "border-slate-100",
    timerContainer: "max-w-md flex flex-row justify-evenly items-center mx-auto px-100 py-5 bg-white mb-10 rounded-xl border-pink-200/100 border-2",
  },
};

export default theme;
