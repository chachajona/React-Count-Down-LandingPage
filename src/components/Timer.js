import React, { useState, useRef, useEffect, useContext } from "react";
import theme from "../styles/theme";
import { ThemeContext } from "../context/ThemeContext";

const Timer = ({ targetDate }) => {
  const { theme: selectedTheme } = useContext(ThemeContext); 
  const themeStyles = theme[selectedTheme];

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startCountdown = () => {
    const countDownDate = new Date(targetDate).getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startCountdown();
    return () => {
      clearInterval(interval.current);
    };
  }, [targetDate]);

  return (
    <div className={themeStyles.timerContainer}>
      <section className="flex flex-col items-center justify-center">
        <p className={`text-5xl font-bold text-center ${themeStyles.textColor.primary}`}>
          {timerDays}
        </p>
        <p className={`text-center ${themeStyles.textColor.tertiary}`}>Days</p>
      </section>
      <span className={`text-5xl font-thin text-center ${themeStyles.textColor.tertiary}`}>|</span>
      <section className="flex flex-col items-center justify-center">
        <p className={`text-5xl font-bold text-center ${themeStyles.textColor.primary}`}>
          {timerHours}
        </p>
        <p className={`text-center ${themeStyles.textColor.tertiary}`}>Hours</p>
      </section>
      <span className={`text-5xl font-thin text-center ${themeStyles.textColor.tertiary}`}>|</span>
      <section className="flex flex-col items-center justify-center">
        <p className={`text-5xl font-bold text-center ${themeStyles.textColor.primary}`}>
          {timerMinutes}
        </p>
        <p className={`text-center ${themeStyles.textColor.tertiary}`}>Minutes</p>
      </section>
      <span className={`text-5xl font-thin text-center ${themeStyles.textColor.tertiary}`}>|</span>
      <section className="flex flex-col items-center justify-center">
        <p className={`text-5xl font-bold text-center ${themeStyles.textColor.primary}`}>
          {timerSeconds}
        </p>
        <p className={`text-center ${themeStyles.textColor.tertiary}`}>Seconds</p>
      </section>
    </div>
  );
};

export default Timer;
