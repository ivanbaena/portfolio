import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel,
  Scrollbar,
  Navigation,
  Pagination,
} from 'swiper';
import { Item } from '../item/Item';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar, Navigation, Pagination]);

export const Loop = ({
  items,
  setLength,
}: {
  items: { project: string; keywords: string[]; description: string }[];
  setLength: any;
}) => {
  return (
    <Swiper
      loop
      scrollbar={{ draggable: false }}
      mousewheel={{
        invert: false,
      }}
      direction='horizontal'
      slidesPerView={'auto'}
      freeMode={true}
    >
      <SwiperSlide>
        <Swiper
          scrollbar={{ draggable: false }}
          mousewheel={{
            invert: false,
          }}
          direction='vertical'
          slidesPerView={'auto'}
          freeMode={true}
          onSwiper={(swiper) => {
            setLength(Array.from(swiper.slides).length);
          }}
        >
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Item {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
};
