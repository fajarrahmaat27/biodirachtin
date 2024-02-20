import React from "react";
import { SlActionRedo } from "react-icons/sl";
import { IoArrowRedo } from "react-icons/io5";
import { PiCursorClickFill } from "react-icons/pi";


//import data
import { features } from "../data";
import { overview } from "../data";


const Feature2 = () => {
  //destructure features
  const { feature2 } = features;
  const { productImg } = overview;

  //destructure feature2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover">
      <div className="container mx-auto w-full lg:w-[1500px]">
      <h1 className="font-bold font-secondary text-center text-4xl" data-aos="fade-up"
              data-aos-delay="800">Ayo Kenalan Lebih Dalam Lagi dengan Biopestisida Biodirachtin!</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8">
          <div className="bg-gradient-to-r from-amber-200 to-amber-500 rounded-[35px] h-[320px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer" data-aos="fade-right"
              data-aos-delay="800">
            <div>
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-2xl font-semibold text-primary text-center font-secondary ">Mengenal lebih jauh Biopestisidayy
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[200px] mx-auto">
                <p className="text-xl font-semibold text-center">Selengkapnya</p>
                <PiCursorClickFill />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-200 to-amber-500 rounded-[35px] h-[320px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16" data-aos="fade-right"
              data-aos-delay="1000">
            <div>
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-2xl font-semibold text-primary text-center font-secondary">Tanaman Penghasil zat Biopestisida
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[200px] mx-auto">
                <p className="text-xl font-semibold text-center">Selengkapnya</p>
                <PiCursorClickFill />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-200 to-amber-500 rounded-[35px] h-[320px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer" data-aos="fade-right"
              data-aos-delay="1200">
            <div>
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-2xl font-semibold text-primary text-center font-secondary">Biodirachtin si Biopestisida Super!
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[200px] mx-auto">
                <p className="text-xl font-semibold text-center">Selengkapnya</p>
                <PiCursorClickFill />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-200 to-amber-500 rounded-[35px] h-[320px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16" data-aos="fade-right"
              data-aos-delay="1400">
            <div>
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-2xl font-semibold text-primary text-center font-secondary">Target Biodirachtin!
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[200px] mx-auto">
                <p className="text-xl font-semibold text-center">Selengkapnya</p>
                <PiCursorClickFill />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Feature2;
