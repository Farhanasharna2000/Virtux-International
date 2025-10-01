import React from 'react';
import Hero from '../components/home/hero';
import ProcessFlow from '@/components/home/process';
import Service from '@/components/home/service';
import About from '@/components/home/about';
import Testimonial from '@/components/home/testimonial';
import Contact from '@/components/home/contact';

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProcessFlow/>
      <Service/>
      <About/>
      <Testimonial/>
      <Contact/>
    </div>
  );
};

export default Home;