import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';

import './Scroll.module.scss';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

export const Scroll = ({ children }: { children: any }) => {
  const [slide, setSlide] = useState(0);
  const [expand, setExpand] = useState(false);
  const [swiperContainer, setSwiper] = useState({});

  const newChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      swiperInstance: swiperContainer,
      slideIndex: slide,
      expand,
    })
  );
  return (
    <Swiper
      autoHeight
      freeModeMomentumVelocityRatio={3.2}
      freeModeMomentumRatio={3.2}
      freeModeMomentumBounceRatio={4}
      scrollbar={{ draggable: true, hide: false }}
      mousewheel={true}
      direction='vertical'
      freeMode={true}
      onSwiper={(swiper) => setSwiper(swiper)}
      onScrollbarDragMove={(swiper) => setSlide(swiper.activeIndex)}
      onActiveIndexChange={(swiper) => {
        setSlide(swiper.activeIndex);
      }}
      onScroll={(swiper) => {
        if (swiper.isBeginning) {
          setExpand(false);
        } else if (!swiper.isBeginning && !expand) {
          setExpand(true);
        }
      }}
    >
      {newChildren.map((child: any, i: any) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
