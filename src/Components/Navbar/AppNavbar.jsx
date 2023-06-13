/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";

const data = [
  {
    name: "About",
    url: "#",
  },
  {
    name: "Skills",
    url: "#",
  },
  {
    name: "Experience",
    url: "#",
  },
  {
    name: "Projects",
    url: "#",
  },
  {
    name: "Statistika",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];

const AppNavbar = () => {
  const [open, setOpen] = useState(false);
  const ActiveNav = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <div className="backdrop-blur-[8px]  fixed w-full  z-[1000] ">
        <div className="container  px-4 md:px-0 mx-auto flex items-center justify-between ">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" className="py-2  text-3xl font1 uppercase">
              Logo
            </a>
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 fill-white md:hidden"
              onClick={ActiveNav}
            >
              <path
                d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className={`md:flex items-center gap-6 hidden `}>
            {data.map((item) => {
              return (
                <a
                  key={item.name}
                  href="#"
                  className="text-lg font-bold  py-2 hover:scale-105 hover:text-amber-600 duration-300"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="hidden md:block">
            <select
              name=""
              id=""
              className="bg-[transparent] py-2 outline-none font-bold text-lg"
            >
              <option value="" className="text-slate-900 font-bold">
                Uz
              </option>
              <option value="" className="text-slate-900 font-bold">
                En
              </option>
              <option value="" className="text-slate-900 font-bold">
                Rus
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        className={`backdrop-blur-[8px] duration-300  fixed    w-full  top-0 bottom-0 z-[990] flex justify-center flex-col items-center  ${
          open ? "left-0" : "left-[-100%]"
        } `}
      >
        {data.map((item) => {
          return (
            <a
              key={item.name}
              href="#"
              className="text-xl w-full  text-center font-bold  py-5 hover:scale-105 hover:text-amber-600 duration-300"
            >
              {item.name}
            </a>
          );
        })}
        <div className="mt-6 border-2">
          <select
            name=""
            id=""
            className="bg-[transparent] p-2 outline-none font-bold w-40 text-center "
          >
            <option value="" className="text-slate-900 font-bold">
              Uz
            </option>
            <option value="" className="text-slate-900 font-bold">
              En
            </option>
            <option value="" className="text-slate-900 font-bold">
              Rus
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
