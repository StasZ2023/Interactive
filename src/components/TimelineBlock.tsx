
import React, { useState, useEffect, useRef } from 'react';
import Header from './Header/Header';
import Circle from './circle/Circle'
import Years from './Years/Years';
import Navigatio from './nav/Navigation'
import Slider from './slider/Slider';
import 'swiper/css';
import { TimePeriod, Event } from '../types/timeline';
import  './TimelineBlock.scss';

interface TimelineBlockProps {
  periods: TimePeriod[];
}
const TimelineBlock: React.FC<TimelineBlockProps> = ({ periods }) => {
  const [activePeriodIndex, setActivePeriodIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);
  const swiperRef = useRef<any>(null);
 console.log(activePeriodIndex)
  
 

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowNavigation(false); 
    } else {
      setShowNavigation(true); 
    }
  };
console.log(showNavigation)
  
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activePeriodIndex);
    }
  }, [activePeriodIndex]);
  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
console.log(swiperRef)
  return (
    <div className="wrapper">
      
      <Header/>

     
      <Circle periods = {periods} 
      activePeriodIndex = {activePeriodIndex}
      onCircleClick={(index) => setActivePeriodIndex(index)} 
      />
     
      <Years periods={periods}
      activePeriodIndex={activePeriodIndex}
      />

    
      {showNavigation && (
        <Navigatio
          periods={periods}
          activePeriodIndex={activePeriodIndex}
          setActivePeriodIndex={setActivePeriodIndex}
        />
      )}
     
      <Slider 
      periods = {periods}
      activePeriodIndex = {activePeriodIndex}
      swiperRef = {swiperRef}/>
      {!showNavigation && (
        <Navigatio
          periods={periods}
          activePeriodIndex={activePeriodIndex}
          setActivePeriodIndex={setActivePeriodIndex}
        />
      )}
    </div>
  );
};

export default TimelineBlock;