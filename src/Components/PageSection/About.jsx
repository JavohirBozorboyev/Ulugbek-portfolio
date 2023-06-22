import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="py-20 relative">
        <div className="container pb-8 mx-auto px-4 md:px-0">
          <div>
            <h1 className="font1 text-4xl border-b py-4"> About me</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-0 mt-10 flex flex-col lg:flex-row-reverse md:flex-row md:gap-2">
          <div className="w-full  flex flex-col gap-10 md:w-[60%]">
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eaque, quas necessitatibus molestiae nemo, aperiam
              explicabo nostrum deserunt doloribus dolores facere adipisci
              mollitia reiciendis, laboriosam impedit quam vel. Aperiam, quasi?x
            </p>
            <div className="flex flex-col  gap-4 lg:flex-row md:gap-0  ">
              <div className="flex flex-col gap-2 w-full lg:w-[50%] ">
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">
                    First name:
                  </p>
                  <p className="text-lg">Ulug'bek</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Last name:</p>
                  <p className="text-lg">Xatamov</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Age:</p>
                  <p className="text-lg">22 yosh</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Adress:</p>
                  <p className="text-lg">Namangan</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">
                    Nationality:
                  </p>
                  <p className="text-lg">Uzbekistan</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full lg:w-[50%] ">
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Job:</p>
                  <p className="text-lg">Web Developer</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Phone:</p>
                  <p className="text-lg">+998 99 325 74 17</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Email:</p>
                  <p className="text-lg">ulugbekxatamjonov@gamil.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg text-amber-600 font-bold">Language:</p>
                  <p className="text-lg">English, Uzbek</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex justify-start mt-10 md:mt-0 relative">
            <img
              src="https://tngwebsolutions.ca/wp-content/uploads/2022/12/Software-Development.jpg"
              alt=""
              className="rounded-md w-full lg:w-80 lg:h-80 object-cover relative z-30 "
            />
            <div className=" hidden lg:block absolute w-full lg:w-[320px] lg:h-[360px] p-10 bg-white left-10 z-0 -top-5 rounded-lg "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
