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
  height: '400px',
  borderRadius:'10px',
  margin: '0 5px'

}
const slideImages = [
  {
    url: '../img-header.jpeg',
    caption: 'slide-1'
  },
  {
    url: '../chailde1.jpeg',
    caption: 'slide-2'
  },
  {
    url: '../images/5c088ed6-2902-4301-a8bc-68620709b62e3.jpeg',
    caption: 'slide-3'
  },
];

export default function Slideshow () {
    return (
      <div className="slide-container" >
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className={slideImage.caption} style={{ ...divStyle}}>
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}> */}
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}