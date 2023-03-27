import React from 'react';
import VideoPlayer from '../../components/video-slider/VideoPlayer';
import VideosWrapper from '../../components/video-slider/VideosWrapper';
import { videos } from '../../components/VideoItems';
import './VideoCarouselSection.css';

function VideoCarouselSection() {

  return (
    <div className='videos-container'>
        <div className='short-desc'>

        </div>
        <div className='videos-section'>
            <VideosWrapper slides={videos} />
        </div>
    </div>
  )
}

export default VideoCarouselSection;