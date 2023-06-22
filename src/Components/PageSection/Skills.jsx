import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Img from "../../img/python.png";
const animation = { duration: 20000, easing: (t) => t };

const Skills = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div id="skills" className="bg-white py-8">
      <div className="container pb-6 mx-auto px-4 md:px-0">
        <div>
          <h1 className="font1 text-4xl border-b py-4 border-slate-700 text-slate-800 ">
            My Skills
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div ref={sliderRef} className="keen-slider text-black ">
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
          <div className="keen-slider__slide flex justify-center   ">
            <img src={Img} alt="" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
