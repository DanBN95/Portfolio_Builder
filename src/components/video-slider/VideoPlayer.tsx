import React from 'react';
import './VideoPlayer.css';
import videoBg from '../../assets/simon.mp4';

type VideoPlayerType = {
    videoSrc: string;
    onClickArrow: (dir: "left" | "right") => void;
}

function VideoPlayer({ videoSrc, onClickArrow }: VideoPlayerType) {
  return (
    <div className='videos-box'>
        <video 
          src={videoSrc} 
          width="100%" 
          height="100%" 
          controls
          autoPlay
          muted 
          onError={(error) => console.log(error)} />
        <i className='arrow left' onClick={() => onClickArrow("left")}></i>
        <i className='arrow right' onClick={() => onClickArrow("right")}></i>
    </div>
  )
}

export default VideoPlayer;