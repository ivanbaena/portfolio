import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';

import './Slider.module.scss';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

export default ({ children }: { children: any }) => {
  const [slide, setSlide] = useState(0);
  const [swiperContainer, setSwiper] = useState({});

  const newChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      swiperInstance: swiperContainer,
      slideIndex: slide,
    })
  );
  return (
    <Swiper
      freeModeMomentumVelocityRatio={1.2}
      freeModeMomentumRatio={1.2}
      freeModeMomentumBounceRatio={4}
      scrollbar={{ draggable: true, hide: false }}
      mousewheel={true}
      direction='vertical'
      watchSlidesVisibility={true}
      freeMode={true}
      // freeModeSticky={true}
      onSwiper={(swiper) => setSwiper(swiper)}
      // onScrollbarDragMove={(swiper) => setSlide(swiper.activeIndex)}
      onScroll={(swiper) => {
        console.log(swiper.activeIndex);
      }}
      onActiveIndexChange={(swiper) => {
        setSlide(swiper.activeIndex);
      }}
    >
      {newChildren.map((child: any, i: any) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
