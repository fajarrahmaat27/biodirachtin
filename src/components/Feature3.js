import React from "react";
//import data
import { features } from "../data";
import { PiCursorClickFill } from "react-icons/pi";
import { overview } from "../data";




const Feature3 = () => {
  //destructure features
  const { feature2 } = features;
  const { productImg } = overview;

  //destructure feature2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="bg-gradient-to-r overflow-hidden from-emerald-500 py-20 to-emerald-900">
      <div className="container mx-auto w-full lg:w-[1500px]">
      <h1 className="font-bold font-secondary text-center text-white text-4xl" data-aos="fade-down"
              data-aos-delay="900">Yuk pahami kebutuhan tanamanmu!</h1>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8">
          <div className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover rounded-[35px] h-[250px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer" data-aos="fade-up"
              data-aos-delay="600">
            <div className="flex flex-col items-center">
              <a href="#/" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-xl font-semibold text-primary px-5 text-center font-secondary">
              Factor growth tumbuhan
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[120px] mx-auto py-1">
                <p className="font-semibold text-xs text-center">Selengkapnya</p>
                <PiCursorClickFill  className="text-xs"/>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover rounded-[35px] h-[250px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16" data-aos="fade-up"
              data-aos-delay="800">
            <div className="flex flex-col items-center">
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-xl font-semibold text-primary px-5 text-center font-secondary">
              Kebutuhan nutrisi tumbuhan
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[120px] mx-auto py-1">
                <p className="font-semibold text-xs text-center">Selengkapnya</p>
                <PiCursorClickFill  className="text-xs"/>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover rounded-[35px] h-[250px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer" data-aos="fade-up"
              data-aos-delay="1000">
            <div className="flex flex-col items-center">
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-xs font-semibold text-primary px-5 text-center font-secondary">
              Ciri dan Solusi tanaman yang kekurangan unsur makro nutrisi
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[120px] mx-auto py-1">
                <p className="font-semibold text-xs text-center">Selengkapnya</p>
                <PiCursorClickFill  className="text-xs"/>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover rounded-[35px] h-[250px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16" data-aos="fade-up"
              data-aos-delay="1200">
            <div className="flex flex-col items-center">
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-xs font-semibold text-primary px-5 text-center font-secondary">
              Ciri dan Solusi tanaman yang kekurangan unsur mikro nutrisi
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[120px] mx-auto py-1">
                <p className="font-semibold text-xs text-center">Selengkapnya</p>
                <PiCursorClickFill  className="text-xs"/>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r py-20 from-green-200 to-green-100 bg-cover rounded-[35px] h-[250px] shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer" data-aos="fade-up"
              data-aos-delay="1400">
            <div className="flex flex-col items-center">
              <a href="#" target="_blank">
                <img className="mx-auto sm:w-[200px] lg:w-[200px] w-[200px]" src={productImg} alt="" />
              </a>
              <h5 className="text-xl font-semibold text-primary px-5 text-center font-secondary">
              Yuk, buat pupuk organik!
              </h5>
              <div className="flex justify-center items-center rounded-3xl mt-2 bg-gradient-to-r from-emerald-700 to-emerald-700 text-white w-[280px] xl:w-[120px] mx-auto py-1">
                <p className="font-semibold text-xs text-center">Selengkapnya</p>
                <PiCursorClickFill  className="text-xs"/>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Feature3;
