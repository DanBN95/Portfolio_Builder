import React from 'react';
import { useState } from 'react';
import VideoPlayer from '../../components/video-slider/VideoPlayer';
import VideosWrapper from '../../components/video-slider/VideosWrapper';
import { videos } from '../../components/VideoItems';
import './VideoCarouselSection.css';

function VideoCarouselSection() {

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className='videos-container'>
        <div className='short-desc'>
          <div className='title'>
            {videos[slideIndex].videoTitle}
          </div>
          <div className='desc-paragraph'>
            <p>{videos[slideIndex].description}</p>
          </div>
        </div>
        <div className='videos-section'>
            <VideosWrapper slides={videos} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        </div>
    </div>
  )
}

export default VideoCarouselSection;