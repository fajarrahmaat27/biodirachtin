import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

//import data
import { hero } from "../data"; 
//import icons
import { HiOutlineChevronDown } from "react-icons/hi";
const Hero = () => {
  //destructure hero data
  const { title, subtitle, subtitle2, btnText, compText, image } = hero;
  return (
    <section className=" min-h-[200px] overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-900 font-secondary">
      <div class="container mx-auto min-h-[750px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* {text} */}
          <div className="flex-1">
            <img className="h-[100px]" data-aos="fade-down"
              data-aos-delay="500" src={title} alt="" />
            <p
              className="lead lg:mb-10 text-[#fff3ec] font-secondary"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Formula kombinasi metabolit sekunder dari 4 tumbuhan Pembasmi Hama
              & Jamur Tanaman
            </p>
            {/* {btn & comp text} */}
            <div
              className="flex justify-center lg:justify-start items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-12 lg:gap-x-6"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn btn-sm btn-outline lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4 font-secondary font-semibold rounded-full">
                {btnText}
                <BsArrowRightCircleFill className="text-2xl" />
              </button> 
              
            </div>
          </div>
          {/* {image} */}
          <div className="flex-1" data-aos="fade-up" data-aos-delay="800">
            <img className="lg:h-[400px] h-[300px]" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
