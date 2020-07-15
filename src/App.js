import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js';
// import FaceRecognition from '';
import 'tachyons';
import Rank from './components/rank/Rank';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
