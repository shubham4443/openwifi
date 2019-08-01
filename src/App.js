import React, { useEffect } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import './App.css';
import SwipeableViews from 'react-swipeable-views';

export default () => {

    useEffect(() => alert('Swipe right for side panel'), []);


    return(
        
        <SwipeableViews enableMouseEvents  >
        <Slide1 />
        <Slide2 />
        </SwipeableViews>
  
    )

}