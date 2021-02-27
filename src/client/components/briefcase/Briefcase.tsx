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
import { data } from './data';
import { Item } from './item/Item';
import { Loop } from './loop';

import styles from './Briefcase.module.scss';

// install Swiper modules
SwiperCore.use([
  Mousewheel,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow,
]);

const caseItems = () => data.map((item: any) => item.item);

export const Briefcase = ({
  swiperInstance,
  expand,
}: {
  swiperInstance?: SwiperCore;
  expand: boolean;
}): JSX.Element | null => {
  const [items, setItems] = useState(caseItems());
  const [slide, setSlide] = useState(0);
  const [length, setLength] = useState(0);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setItems(caseItems());
    }
  }, [swiperInstance, slide]);

  if (swiperInstance && Object.keys(swiperInstance).length === 0) return null;

  return (
    <Scene
      style={{ backgroundColor: data[slide].color }}
      className={expand ? styles.expand : styles.compact}
      content={() => (
        <div className={`${styles.tab} ${styles.tabFlex}`}>
          Selected Projects: {`${slide + 1} / ${length}`}
        </div>
      )}
    >
      <Loop items={items} setLength={setLength} />
    </Scene>
  );
};
