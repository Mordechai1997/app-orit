import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import MessageIcon from '@mui/icons-material/Message';
import ScrollAnimation from 'react-animate-on-scroll';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width: '300px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: "auto"
}
const slideImages = [
  {
    class: "recommend1"
  },
  {
    class: "recommend2"
  },
  {
    class: "recommend3"

  },
];

export default function SlidesComments() {
  return (
    <div className="slide-container">
      {/* <ScrollAnimation duration={3} animateIn='wobble'
        initiallyVisible={true}> */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <h3>המלצות</h3>
        <ScrollAnimation animateIn='flipInY'
          animateOut='flipOutY'>
          <MessageIcon fontSize='small' style={{ fill: "gold", margin: '8px 5px 0 0 ' }} />
        </ScrollAnimation>
      </div>
      {/* </ScrollAnimation> */}
      <Slide >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div  style={{ ...divStyle }} className={`${slideImage.class} recommend-box`}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}