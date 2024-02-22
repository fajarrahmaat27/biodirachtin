import React from 'react';

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import MyFooter from './components/MyFooter';
import Copyright from './components/Copyright';

const App = () => {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Overview />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <MyFooter />
      <Copyright />
    </div>
  );
};

export default App;
