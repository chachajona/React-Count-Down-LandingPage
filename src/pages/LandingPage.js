import React, { useContext } from "react";
import theme from "../styles/theme"; // Import the theme object
import { ThemeContext } from "../context/ThemeContext";
import Timer from "../components/Timer";
import Palette from "../components/Pallete";

const LandingPage = () => {
  const countDownDate = new Date("February 10, 2024 00:00:00").getTime();

  const { theme: selectedTheme } = useContext(ThemeContext); 
  const themeStyles = theme[selectedTheme];

  return (
    <div
      className="w-screen h-screen flex flex-row justify-center items-center"
      style={{
        backgroundImage: themeStyles.backgroundImage,
        backgroundSize: "cover",
        fontFamily: themeStyles.fontFamily,
      }}
    >
      <div className={themeStyles.container}>
        <nav className="sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto px-100 py-10 flex flex-row justify-between items-center">
        </nav>
        <div className="max-w-5xl mx-auto px-100 py-20">
          <h1 className={`text-5xl font-bold text-center ${themeStyles.textColor.primary} leading-tight`}>
            The Lunar New Year Is
            <br />
            Coming Soon
          </h1>
          <p className={`text-center mt-5 ${themeStyles.textColor.secondary}`}>
            "As we turn a page on another year, we want to thank you for your
            <br />
            support and wish you a happy and prosperous new year."
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-center mb-1">
          <Palette />
        </div>
        <Timer targetDate={countDownDate} />
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
