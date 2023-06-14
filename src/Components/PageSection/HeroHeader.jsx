/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Fon1 from "../../img/fon.jpg";

const HeroHeader = () => {
  return (
    <>
      <div className="min-h-[650px] relative overflow-hidden border-b-[10px]  pb-4 md:pb-0    flex items-center flex-col justify-between md:flex-row   ">
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
      <div className="fixed right-0 top-0 bottom-0  w-16 z-[800] flex flex-col justify-center items-center gap-4">
        <a
          href="#"
          className="w-10 h-10 backdrop-blur-sm  rounded-full hover:scale-110 duration-300 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-white w-6 h-6"
          >
            <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
          </svg>
        </a>
        <a href="#" className="w-10 h-10 backdrop-blur-sm rounded-full hover:scale-110 duration-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            className="fill-white w-6 h-6"
          >
            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 backdrop-blur-sm rounded-full hover:scale-110 duration-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-white w-6 h-6"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a href="#" className="w-10 h-10 backdrop-blur-sm rounded-full hover:scale-110 duration-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-white w-6 h-6"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="#" className="w-10 h-10 backdrop-blur-sm rounded-full hover:scale-110 duration-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-white w-6 h-6"
          >
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default HeroHeader;
