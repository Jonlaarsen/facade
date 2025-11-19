import React from "react";

const HeroTwoSection = () => {
  return (
    <div className="relative md:h-screen w-full min-h-[500px]">
      <div className="flex flex-col sm:flex-row object-cover h-full w-full">
        {/* <img
          src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Clothing"
          width={500}
          height={500}
          className="object-cover w-full sm:w-[40%] h-[50%] sm:h-full grayscale-90"
        /> */}
        <iframe
          src="https://www.dailymotion.com/embed/video/x6si2fm?autoplay=1&mute=1&controls=0&loop=1&ui-start-screen-info=false&queue-enable=false"
          allow="autoplay; fullscreen"
          className="grayscale"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            border: "none",
            pointerEvents: "none",
          }}
        ></iframe>
      </div>

      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white contrast-200 text-center p-4 sm:p-6 md:p-8 z-20 pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          OMYGAWD
        </h1>
        <div className="mt-4 sm:mt-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase px-5 skew-2">
            THIS IS SO COOL ILL BUY 5 BOARDS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroTwoSection;
