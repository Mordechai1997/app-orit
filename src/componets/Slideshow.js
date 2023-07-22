import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  borderRadius:'10px',
  margin: '0 5px'

}
const slideImages = [
  {
    caption: 'slide-1'
  },
  {
    caption: 'slide-2'
  },
  {
    caption: 'slide-3'
  },
  {
    caption: 'slide-4'
  },
  {
    caption: 'slide-5'
  },
  {
    caption: 'slide-6'
  },
  {
    caption: 'slide-7'
  },
  {
    caption: 'slide-8'
  },
  {
    caption: 'slide-9'
  },
  {
    caption: 'slide-10'
  },
  {
    caption: 'slide-11'
  },
  {
    caption: 'slide-12'
  },
  {
    caption: 'slide-13'
  },
];

export default function Slideshow () {
    return (
      <div className="slide-container" style={{    boxShadow: '0px 2px 5px 0px rgb(60 64 67 / 16%)'}}>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className={`${slideImage.caption} container-img-slider`} style={{ ...divStyle}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}