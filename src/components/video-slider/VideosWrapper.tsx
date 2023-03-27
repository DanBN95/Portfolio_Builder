import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer';
import "./VideoWrapper.css";

type VideoType = {
    videoSrc: string;
}
type VideosWrapperType = {
    width?: number;
    height?: number;
    slides: VideoType[];
    slideIndex: number;
    setSlideIndex: (slideIndex: number) => void;
}


function VideosWrapper({ width, height, slides, slideIndex, setSlideIndex }: VideosWrapperType) {

    const onClickArrow = (dir: string) => {
      let slidesLen = slides.length;
      let vidIndexAfterChange = dir === 'left' ? slideIndex - 1 : slideIndex + 1;
      vidIndexAfterChange = vidIndexAfterChange < 0 ? slidesLen - 1 : vidIndexAfterChange;
      setSlideIndex(vidIndexAfterChange % slidesLen);
    };

    const jumpToSlide = (index: number) => {
      setSlideIndex(index);
    };


  return (
    <div className='wrapper'>
        <ul className='dots-container'>
          {slides.map((item, index) => {
            return (
              <li 
                className={`dot ${index === slideIndex && 'active'}`} 
                key={index}
                onClick={() => jumpToSlide(index)}
              >
              </li>
            )
          })}
        </ul>
        <VideoPlayer videoSrc={slides[slideIndex].videoSrc} onClickArrow={onClickArrow} />
    </div>
  )
}

export default VideosWrapper;