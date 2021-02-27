import React, { useContext } from 'react';
import { Scroll } from '../components/scroll/';
import { Landing } from '../components/landing/';
import { Briefcase } from '../components/briefcase';

const Div = () => (
  <div style={{ backgroundColor: '#e1d0a5', height: '100vh' }}>Slide</div>
);
const HomePage = (props: any) => {
  return (
    <div>
      <Scroll>
        <Landing />
        <Briefcase />
        <Div />
      </Scroll>
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
