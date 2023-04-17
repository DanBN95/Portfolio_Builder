import React, { useEffect, useState } from 'react'
import './Intro.css';
import ProfileImage from '../../images/profile_image.jpg';

const INTRO_TEXT = "FRONTED\n DEVELOPER.";
const INTRO_SUBTITLE = "I like to craft solid and scalable frontend products with great user experiences."

function Intro() {

    const [text, setText] = useState<string>("")
    const [index, setIndex] = useState<number>(0);

    // useEffect(() => {
    //     if (index < INTRO_TEXT.length) {
    //         let timer = setTimeout(() => {
    //             setText(text + INTRO_TEXT[index])
    //             setIndex(index + 1)
    //         }, 100)

    //         return () => clearTimeout(timer);
    //     }
    // }, [index])

  return (
    <div className='intro-container'>
        <div className='title-role'>
            <div className='title-role-text'>
                <p className='intro-text'>{INTRO_TEXT}</p>
                <p className='intro-subtitle'>{INTRO_SUBTITLE}</p>
            </div>
            {/* <HiveGrid /> */}
        </div>
        <div className='item-2'>
            <div className='image-container'>
                <img className='image-style' src={ProfileImage}/>
            </div>
        </div>
    </div>
  )
}

export default Intro