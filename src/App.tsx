import React from 'react';
import './App.css';
import HiveGrid from './components/hive/HiveGrid';
import Navbar from './components/navbar/Navbar';
import About from './sections/about/About';
import Intro from './sections/intro/Intro';
import VideoCarouselSection from './sections/video-carousel /VideoCarouselSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <hr className='divider' />
      <About />
      <hr className='divider' />
      <VideoCarouselSection />
    </div>
  );
}

export default App;
