import React, { useContext } from "react";
import AuthCard from "../components/layout/AuthCard";
import imgLight from "../assets/lightLogo.svg";
import imgDark from "../assets/DarkLogo.svg";
import star from "../assets/starLogo.png";
import light from "../assets/lightningLogo.png";
import code from "../assets/codeLogo.png";
import increase from "../assets/increaseLogo.png";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
import { ThemeContext } from "../context/ThemeContext";
const Landing = () => {
  const features = [
    {
      text: "AI-Powered Matching",
      image: star,
    },
    {
      text: "Smart Chatbot",
      image: light,
    },
    {
      text: "AI Documentation",
      image: code,
    },
    {
      text: "Contribution Workflow",
      image: increase,
    },
  ];

  const { theme } = useContext(ThemeContext);
  const img = theme === "light" ? imgLight : imgDark;
  return (
    <section className="h-screen bg-background flex items-center m-5 ">
      <div className="m-auto">
        <div className="w-full h-[10%] flex justify-end mb-5">
          <ThemeSwitcher />
        </div>
        <div className="container mx-10 lg:mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-15 items-center ">
          {/* LEFT SIDE */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img
                src={img}
                alt="logo"
                className="w-[20rem] md:w-100 lg:w-md h-auto object-contain rounded"
              />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-simibold text-textdark leading-tight mb-10">
              Your Smart Companion for <br />
              <span className="text-primary">Open-Source Success</span>
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-2xl mb-12 mr-30">
              Discover perfect repositories, streamline contributions, and build
              your developer reputation — all in one intelligent platform.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xlg ">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="bg-white border-2 border-Gray200  rounded-2xl px-4 py-3 flex items-center gap-3 text-base text-text-secondary"
                >
                  <img
                    src={feature.image}
                    alt={feature.text}
                    className="w-6 h-6"
                  />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-end  max-w-200 mb-10">
            <AuthCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
