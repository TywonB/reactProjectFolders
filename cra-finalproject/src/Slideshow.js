import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'media/B_A_11.jpg',
    'media/B_A_12.jpg',
    'media/a1e3d9d62a11738e8da7a82c731f96ca1.jpg',
    'media/a1e3d9d62a11738e8da7a82c731f96ca2.jpg',
    'media/before-after1.jpg',
    'media/before-after2.jpg',
    'media/brady-bunch-house-before-and-after-courtesy-discovery-networks1.jpg',
    'media/brady-bunch-house-before-and-after-courtesy-discovery-networks2.jpg'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  };

  const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Before</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>After</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Before</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>After</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            <span>Before</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
            <span>After</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
            <span>Before</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
            <span>After</span>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;