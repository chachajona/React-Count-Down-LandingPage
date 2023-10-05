import React from "react";
import background from "../assets/6241816.jpg";
import Timer from "../components/Timer";

const LandingPage = () => {
  const countDownDate = new Date("February 10, 2024 00:00:00").getTime();

  return (
    <div
      className="w-screen h-screen flex flex-row justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="container bg-white backdrop-filter backdrop-blur-lg z-10 bg-opacity-50 border-b border-gray-200 rounded-xl">
        <nav className="sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto px-100 py-10 flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold text-left text-grey-500">
            Lunar New Year
          </h1>
          <h2 className="text-xl font-thin text-right text-grey-500">2024</h2>
        </nav>
        <div className="max-w-5xl mx-auto px-100 py-20">
          <h1 className="text-5xl font-bold text-center text-grey-500 leading-tight">
            The Lunar New Year Is
            <br />
            Coming Soon
          </h1>
          <p className="text-slate-400 text-center mt-5">
            "As we turn a page on another year, we want to thank you for your
            <br />
            support and wish you a happy and prosperous new year."
          </p>
        </div>
        <Timer targetDate={countDownDate} />
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
