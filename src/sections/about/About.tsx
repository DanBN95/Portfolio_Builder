import React from 'react';
import './About.css';
import ComputerSeatImage from '../../images/about-me-reg-far.jpeg';
import { aboutSectionString } from './AboutSectionStrings';

function About() {

    const renderItem = (item: any, index: number) => {
        if (item?.isUl) {
            const listOfItems = item.paragraphString.split('\n');
            return (
                <ul>
                    <p className={item.titleClassName}>{item.title}</p>
                    {listOfItems?.length && listOfItems.map((li: string, li_index: number) => {
                        return (
                            <li key={`${li_index}-${li}`} className="about-para">{li}</li>
                        )
                    })}
                </ul>
            )
        }
        return (
            <>
                <div key={`${index}-${item}`} className={item.titleClassName}>
                    {item.title}
                </div>
                <div className='about-para-container'>
                    <p className='about-para'>{item.paragraphString}</p>
                </div>
            </>
        )
    };


  return (
    <div className='body-container'>
        <div className='img-container'>
            <img src={ComputerSeatImage} style={{ height: '100vh', width: '100%', objectFit: 'cover'}}></img>
        </div>
        <div className='about-container'>
            {aboutSectionString.map(renderItem)}
        </div>
    </div>
  )
}

export default About;