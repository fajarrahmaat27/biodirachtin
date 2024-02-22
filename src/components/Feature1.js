import React from 'react';
// import '@styles/bottle.css'
import { FaCheckCircle } from "react-icons/fa";
//import data
import {features} from '../data'

const Feature1 = () => {
  //destructure features
  const {feature1} = features;
  //destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1 ;
  return <section className='bg-gradient-to-r from-emerald-500 to-emerald-900 font-secondary text-white py-[80px]'>
    <h1 className='container mx-auto text-center font-bold text-3xl text-white mb-3'>Keutamaan Produk Kami</h1>
    <div className='container mx-auto flex justify-center'>
      <div class="bottlegrid">
        <div className="Bottle mx-auto flex flex-col items-center justify-center" data-aos="zoom-in"
              data-aos-delay="600">
          <img className='lg:h-[400px] md:h-[300px] sm:h-[300px] h-[250px] ' src={image} alt=""/>
        </div>
        <div className="keunggulan-1 text-center flex justify-center flex-col items-center" data-aos="zoom-in"
              data-aos-delay="300">
        <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Multiple active inggridient 
          </p>
        </div>
        <div className="keunggulan-2 text-center flex justify-center lg:flex-col flex-col items-center" data-aos="zoom-in"
              data-aos-delay="500">
        <FaCheckCircle className='text-xl md:text-lg'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Bahan aktif dari metabolisme sekunder tumbuhan, sehingga 100% biodegradable</p>
        </div>
        <div className="keunggulan-3 text-center flex justify-center flex-col items-center" data-aos="zoom-in"
              data-aos-delay="300">
        <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Spektrum pengendalian hama dan jamur yang luas dan selektif
          </p>
        </div>
        <div className="keunggulan-4 text-center flex justify-center flex-col items-center" data-aos="zoom-in"
              data-aos-delay="500">
        <FaCheckCircle className='text-2xl'/>
          <p className='text-center max-w-[200px] md:text-sm xl:text-lg text-xs sm:text-xs'>Mengandung makronutrien dan micronutrien bagi pertumbuhan tanaman hortikultura</p>
        </div>
      </div>
    </div>

    
  </section>;
};

export default Feature1;
