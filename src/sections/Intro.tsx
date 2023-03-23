import { url } from 'inspector';
import React, { useEffect, useState } from 'react'
import HiveGrid from '../components/hive/HiveGrid';
import './Intro.css';

const INTRO_TEXT = "Welcome to Portfolio-Template-Generator\n Frontend Developer\n Based in Israel"

function Intro() {

    const [text, setText] = useState<string>("")
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < INTRO_TEXT.length) {
            let timer = setTimeout(() => {
                setText(text + INTRO_TEXT[index])
                setIndex(index + 1)
            }, 100)

            return () => clearTimeout(timer);
        }
    }, [index])

  return (
    <div className='body-container' style={
        {
            backgroundImage: "url(img/coloredwall_bg.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'   
        }
    }>
        <div className='item-1'>
            <p className='intro-text'>{text}</p>
            
            {/* <HiveGrid /> */}
        </div>
    </div>
  )
}

export default Intro