import React from "react";
//import data

import { overview } from "../data";

const Overview = () => {
  //destructure overview
  const { productImg } = overview;
  return (
    <section className="lg:min-h-[400px] items-center min-h-[600px] overflow-hidden bg-gradient-to-r from-green-200 to-green-100 bg-cover bg-left-top pt-[5px] mx-auto flex justify-center">
      <div className="container rounded-lg min-h-[650px] lg:min-h-[350px] flex flex-col lg:flex-row-reverse justify-center items-center">
        <img className="lg:h-[200px] h-[150px]" data-aos="fade-down"
              data-aos-delay="500" src={productImg} alt=""/>
        <div class="container mx-auto flex flex-col justify-center">
          <h1 className="font-bold text-2xl text-left order-1 font-secondary" data-aos="fade-left"
              data-aos-delay="300">
          Sustainable Agriculture with Biopesticide
          </h1>
          <p className="text-justify text-base font-semibold mt-2 order-2 font-secondary" data-aos="fade-right"
              data-aos-delay="300">
          Keberlanjutan pertanian tentunya harus didukung dengan kemajuan ilmu dan teknologi untuk mengembangkan inovasi brilian demi terciptanya kesejahteraan pangan. Salah satu upaya penting dalam keberlanjutan pertanian adalah mengembangkan inovasi pestisida yang efektif dan aman bagi lingkungan. Biopestisida merupakan terobosan pestisida nabati yang berfungsi sebagai penolak, pembasmi, antifertilitas hama, bersifat bio-degradable sehingga tidak mencemari lingkungan dan relatif aman bagi manusia dan hewan karena residunya mudah terurai. Biopestisida membunuh hama secara spesifik, sehingga tidak menimbulkan resistensi hama. Selain itu, juga mengandung nutrisi yang dapat menunjang pertumbuhan tanaman. 
          </p>
          {/* <img src={Produc} alt=""  data-aos='fade-up' data-aos-offset='300'/> */}
        </div>
      </div>
    </section>
  );
};

export default Overview;
