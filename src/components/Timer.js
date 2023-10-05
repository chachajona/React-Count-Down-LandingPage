import React, { useState, useRef, useEffect } from "react";

const Timer = ({ targetDate }) => {
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
    <div className="max-w-md flex flex-row justify-evenly items-center mx-auto px-100 py-5 bg-white mb-10 rounded-xl border-pink-200/100 border-2">
      <section className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-center text-grey-500">
          {timerDays}
        </p>
        <p>Days</p>
      </section>
      <span className="text-5xl font-thin text-center text-grey-500">|</span>
      <section className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-center text-grey-500">
          {timerHours}
        </p>
        <p>Hours</p>
      </section>
      <span className="text-5xl font-thin text-center text-grey-500">|</span>
      <section className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-center text-grey-500">
          {timerMinutes}
        </p>
        <p>Minutes</p>
      </section>
      <span className="text-5xl font-thin text-center text-grey-500">|</span>
      <section className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-center text-grey-500">
          {timerSeconds}
        </p>
        <p>Seconds</p>
      </section>
    </div>
  );
};

export default Timer;
