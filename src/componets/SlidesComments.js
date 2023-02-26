import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '200px',
  width:'300px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin:"auto"
}
const slideImages = [
  {
    class:"recommend1"
  },
  {
    class:"recommend2"
  },
  {
    class:"recommend3"

  },
];

export default function SlidesComments() {
  return (
    <div className="slide-container">
      <h3>המלצות</h3>
      <Slide >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle }} className={`${slideImage.class}`}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}