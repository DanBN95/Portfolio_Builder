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
}


function VideosWrapper({ width, height, slides }: VideosWrapperType) {

    const [videoIndex, setVideoIndex] = useState(0);

    const onClickArrow = (dir: string) => {
      let slidesLen = slides.length;
      let vidIndexAfterChange = dir === 'left' ? videoIndex - 1 : videoIndex + 1;
      vidIndexAfterChange = vidIndexAfterChange < 0 ? slidesLen - 1 : vidIndexAfterChange;
      setVideoIndex(vidIndexAfterChange % slidesLen);
    };


  return (
    <div className='wrapper'>
        <VideoPlayer videoSrc={slides[videoIndex].videoSrc} onClickArrow={onClickArrow} />
    </div>
  )
}

export default VideosWrapper;