import React from "react";
import Fon1 from "../../img/fon.jpg";

const HeroHeader = () => {
  return (
    <div className="min-h-[650px] relative overflow-hidden     flex items-center flex-col justify-between md:flex-row   ">
      <div className="container   overflow-hidden relative z-50 mx-auto px-4 md:px-0 pt-20 pb-4 ">
        <div
          className="md:w-1/2
        "
        >
          <p className="text-xl">My name is</p>
          <h1 className="font1 text-4xl my-4">Xatamjonov Ulug’bek</h1>
          <p className="text-lg">-sowtaver enginerr</p>
          <p className="text-lg">-Mentor</p>
          <p className="text-lg">-Blogger</p>
        </div>
      </div>

      <div
        style={{
          background: `url('${Fon1}')`,
          backgroundSize: "cover",
        }}
        className=" pol md:border-t-[20px] md:border-b-[20px] rounded-md md:rounded-none  w-[90%] sm:w-[80%]  min-h-[50vh]  border-slate-200 md:absolute md:w-[70%] lg:w-[60%] md:right-0 md:bottom-0 md:top-0 "
      ></div>
    </div>
  );
};

export default HeroHeader;
