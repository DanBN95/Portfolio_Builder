import React, { useState, useCallback } from 'react';
import './About.css';
import ComputerSeatImage from '../../images/about-me-reg-far.jpeg';
import { aboutSectionString } from './AboutSectionStrings';
import FormDialog from '../../components/modals/FormModal';
import AboutSectionItem from './AboutSectionItem';

function About() {

    const [isAiFormMoalOpen, setAiFormModalOpen] = useState(false);

    const onMouseEnter = () => {
        console.log('### generate modal');
    }

    const setGeneratedAiText = useCallback(
        (text: string, key: string) => {
            // setAboutSectionState({
            //     ...aboutSectionStates,
            //     [key]: text
            // })
      },[],
    )


  return (
    <div className='body-container'>
        <div className='img-container'>
            <img src={ComputerSeatImage} style={{ height: '100vh', width: '100%', objectFit: 'contain'}}></img>
        </div>
        <div className='about-container'>
            {aboutSectionString.map((section, index) => {
                const { text, textType, editType, customTextStyle} = section;
                return (
                    <AboutSectionItem {...{ 
                        text,
                        textType,
                        editType,
                        setAiFormModalOpen,
                        customTextStyle,
                    }}
                    />
                )
            })}
        </div>
        <FormDialog 
            isModalOpen={isAiFormMoalOpen} 
            setModalOpen={setAiFormModalOpen} 
            setGeneratedAiText={setGeneratedAiText}  />
    </div>
  )
}

export default About;