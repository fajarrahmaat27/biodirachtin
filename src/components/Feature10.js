import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
//import data
import {features} from '../data'

const Feature1 = () => {
  //destructure features
  const {feature1} = features;
  //destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1 ;
  return <section className='static overflow-hidden py-[80px] bg-gradient-to-r from-emerald-500 to-emerald-900 font-secondary'>
    <div className='container mx-auto flex flex-col items-center justify-center' data-aos="zoom-in"
              data-aos-delay="600">
      <h1 className='text-center font-bold text-3xl text-white mb-3'>Keutamaan Produk Kami</h1>
      <img className='lg:w-[250px] md:w-[200px] w-[150px]' src={image} alt=""/>
    </div>
    <div className='container mx-auto flex justify-center'>
      <div class="grid grid-rows-2 absolute lg:top-[1300px] md:top-[1550px] sm:top-[1550px] top-[1750px] grid-flow-col lg:gap-x-[700px] lg:gap-y-[150px] md:gap-x-[250px] md:gap-y-[180px] sm:gap-y-[130px] gap-y-[70px] gap-x-[190px] font-bold text-black">
        <div className='flex justify-center flex-col items-center' data-aos="zoom-in"
              data-aos-delay="300">
          <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Multiple active inggridient 
          </p>
        </div>
        <div className='flex justify-center flex-col items-center' data-aos="zoom-in"
              data-aos-delay="500">
          <FaCheckCircle className='text-xl md:text-lg'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Bahan aktif dari metabolisme sekunder tumbuhan, sehingga 100% biodegradable</p>
        </div><div className='flex justify-center flex-col items-center' data-aos="zoom-in"
              data-aos-delay="300"> 
          <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Spektrum pengendalian hama dan jamur yang luas dan selektif
          </p>
        </div><div className='flex justify-center flex-col items-center' data-aos="zoom-in"
              data-aos-delay="500">
          <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Mengandung makronutrien dan micronutrien bagi pertumbuhan tanaman hortikultura</p>
        </div>
      </div>
    </div>
    
  </section>;
};

export default Feature1;
