import React, { useContext } from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../components/slider/Slider';
import { Landing } from '../components/landing/';
import { Viewbox } from '../components/viewbox/';

const Div = () => (
  <div style={{ backgroundColor: 'black', height: '100vh' }}>Slide</div>
);
const HomePage = (props: any) => {
  return (
    <div>
      <Slider>
        <Landing />
        <Viewbox />
        <Div />
      </Slider>
    </div>
  );
};

const loadData = () => {
  console.log('load data');
};

export default {
  component: HomePage,
  loadData: loadData,
};
