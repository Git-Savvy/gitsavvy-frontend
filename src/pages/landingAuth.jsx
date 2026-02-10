import React from "react";
import AuthCard from "../components/layout/AuthCard";
import img from "../assets/lightLogo.svg";
import star from "../assets/starLogo.png";
import light from "../assets/lightningLogo.png";
import code from "../assets/codeLogo.png";
import increase from "../assets/increaseLogo.png";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
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
  return (
    <section className="min-h-screen bg-background flex items-center mx-5">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-15 items-center ">
        {/* LEFT SIDE */}
        <div>
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img
              src={img}
              alt="logo"
              className="w-[28rem] h-auto object-contain rounded"
            />
          </div>

          {/* Heading */}
          <h1 className="text-6xl lg:text-6xl font-simibold text-textdark leading-tight mb-10">
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
        <div className="flex flex-col h-screen justify-evenly  ">
          <div className="flex justify-end mb-2">
            <ThemeSwitcher />
          </div>
          <div className="flex justify-end  max-w-[50rem]">
            <AuthCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
