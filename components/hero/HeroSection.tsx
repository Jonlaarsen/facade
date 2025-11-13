import React from "react";
import FuzzyText from "../FuzzyText";

const HeroSection = () => {
  return (
    <div className="relative h-screen  w-full">
      <img
        src="https://cdn.jenkemmag.com/mediaAssetsMaster/2023/01/Shanghai_Skating_Jenkem.jpg"
        alt=""
        width={500}
        height={500}
        className="object-cover w-full h-full grayscale "
      />
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center text-5xl items-center text-white contrast-200 text-center p-4 z-20">
        <FuzzyText baseIntensity={0.12} fontSize={80}>
          FACADE
        </FuzzyText>
        <div>
          <h2 className="text-xl font-bold uppercase mt-4 px-5 skew-2 ">
            BOMBACLAT PUSSY-O
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
