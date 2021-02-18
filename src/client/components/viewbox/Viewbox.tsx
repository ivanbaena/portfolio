import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper';
import { Scene } from '../scene';
import { data } from '../slider/data';

// install Swiper modules
SwiperCore.use([
  Mousewheel,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow,
]);

const viewboxItems = () => data.map((item: any) => item.viewbox);

export const Viewbox = ({
  swiperInstance,
}: {
  swiperInstance?: SwiperCore;
}): JSX.Element | null => {
  const [items, setItems] = useState(viewboxItems());
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (items.length === 0) {
      setItems(viewboxItems());
    }
  }, [swiperInstance, slide]);

  const renderItems = (
    items: { backgroundColor: string; template: string[]; zIndex: number }[]
  ) => {
    return items.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <div style={{ height: '100vh' }}>{i}</div>
        </SwiperSlide>
      );
    });
  };

  if (swiperInstance && Object.keys(swiperInstance).length === 0) return null;

  return (
    <Scene style={{ backgroundColor: data[slide].color }}>
      <Swiper
        freeModeMomentumVelocityRatio={4}
        freeModeMomentumRatio={4}
        freeModeMomentumBounceRatio={4}
        scrollbar={{ draggable: true }}
        mousewheel={{
          invert: false,
        }}
        direction='horizontal'
        slidesPerView={'auto'}
        freeMode={true}
        onScroll={(swiper) => {
          console.log(swiper);

          if (swiper.isBeginning || swiper.isEnd) {
            swiperInstance?.mousewheel.enable();
          } else {
            swiperInstance?.slideTo(1, 600);
            swiperInstance?.mousewheel.disable();
            const body = document.querySelector('body');
            if (body) {
              body.style.overflow = 'hidden';
            }
          }
        }}
        onActiveIndexChange={(swiper) => {
          setSlide(swiper.activeIndex);
        }}
      >
        {renderItems(items)}
      </Swiper>
    </Scene>
  );
};
