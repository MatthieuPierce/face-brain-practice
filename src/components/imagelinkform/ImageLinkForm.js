import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='ma4 mt0 white'>
      <p className='f3'>
        {`This modest utility will detect faces from your pictures`}
      </p>
      <div className='center'>
        <div className='pa4 br3 shadow-5 center form'>
          <input className='f4 pa2 w-70 center' type='text' placeholder="image link here" onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv dib white bg-purple'
          onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}


export default ImageLinkForm;