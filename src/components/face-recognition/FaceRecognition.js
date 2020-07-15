import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({onInputChange, imageUrl, box}) => {
  return (
    <div className='center ma'>
      <div className='absolute mt1'>
        <img 
          id='inputimage'
          alt={'user-submitted image'} src={imageUrl}
          width='500px'
          height='auto'
        />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}


export default FaceRecognition;