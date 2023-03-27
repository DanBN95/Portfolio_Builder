import React, { useState } from 'react';
import './About.css';
import ComputerSeatImage from '../../images/about-me-reg-far.jpeg';
import { aboutSectionString } from './AboutSectionStrings';
import Editable from '../../components/Editable';

function About() {

    const [aboutSection, setAboutSection] = useState(aboutSectionString);

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
                <div className='about-para-container' onMouseEnter={onMouseEnter}>
                    <p className='about-para'>{item.paragraphString}</p>
                </div>
            </>
        )
    };

    const onMouseEnter = () => {
        console.log('### generate modal');
    }


  return (
    <div className='body-container'>
        <div className='img-container'>
            <img src={ComputerSeatImage} style={{ height: '100vh', width: '100%', objectFit: 'cover'}}></img>
        </div>
        <div className='about-container'>
            {/* {aboutSectionString.map((section, index) => {
                const { title, titleClassName, paragraphString, isUl } = section;
                return (
                    <Editable
                    text={aboutText}
                    placeholder="Write a task name"
                    type="input"
                    index={index}
                  >
                    <input
                      type="text"
                      name="task"
                      placeholder="Write a task name"
                      value={aboutText}
                      className={"about-para"}
                      onChange={e => setAboutText(e.target.value)}
                    />
                  </Editable>
                )
            })} */}
            {aboutSection.map(renderItem)}
        </div>
    </div>
  )
}

export default About;