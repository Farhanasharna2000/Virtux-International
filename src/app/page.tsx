import React from 'react';
import Hero from '../components/home/hero';
import ProcessFlow from '@/components/home/process';
import Service from '@/components/home/service';

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProcessFlow/>
      <Service/>
    </div>
  );
};

export default Home;