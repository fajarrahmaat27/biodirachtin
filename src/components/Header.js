import React, {useState, useEffect} from 'react';
//import data
import {header} from '../data'
//import icons
import { HiMenuAlt4, HiOutlineX} from 'react-icons/hi'
// import components
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  //destucture header data
  const {logo, btnText} = header;
  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return <header className={`${
    isActive ? 'lg:top-0 shadow-2xl' : 'lg:top-[60px]'} bg-gradient-to-r overflow-hidden fixed from-emerald-500 to-emerald-900 lg:py-2 w-full transition-all z-10 font-secondary`}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href="#" data-aos='fade-down' data-aos-delay=' 1000'>
          <img className='h-[65px]' src={logo} alt="" />
        </a>
        {/* {nav - initialy hidden 0 show on desktop mode} */}
        <div className='hidden lg:flex' data-aos='fade-down' data-aos-delay='1200'>
          <Nav />
        </div>
        {/* {cta button - initialy hidden - wshow on dekstop} */}
        {/* <button className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400'>{btnText}</button> */}
        {/* {mobile nav trigger btn - hidden on desktop} */}
        <button  className='lg:hidden' onClick={()=> setMobileNav(!mobileNav)}>
          {mobileNav ? (<HiOutlineX className='text-3xl text-accent' />) : 
          (<HiMenuAlt4 className='text-3xl text-accent'/>)}
        </button>
        {/* {mobile nav - hidden on dektop} */}
        <div className={`${mobileNav ? 'left-0' : '-left-full'}  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>
      </div>
    </header>;
};

export default Header;
