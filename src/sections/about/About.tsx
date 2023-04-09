import React, { useState, useCallback } from 'react';
import './About.css';
import ComputerSeatImage from '../../images/about-me-reg-far.jpeg';
import { aboutSectionString } from './AboutSectionStrings';
import FormDialog from '../../components/modals/FormModal';
import AboutSectionItem from './AboutSectionItem';

function About() {

    const [isAiFormMoalOpen, setAiFormModalOpen] = useState(false);
    const [savedSectionStrings, setSavedSectionStrings] = useState(aboutSectionString);

    const onMouseEnter = () => {
        console.log('### generate modal');
    }

    const deleteSectionItem = (index:number) => {
        const temp = [...savedSectionStrings];
        temp.splice(index, 1);
        setSavedSectionStrings(temp);
    }


  return (
    <div className='body-container'>
        <div className='img-container'>
            <img src={ComputerSeatImage} style={{ height: '100vh', width: '100%', objectFit: 'contain'}}></img>
        </div>
        <div className='about-container'>
            {savedSectionStrings.map((section, index) => {
                const { text, textType, editType, customTextStyle} = section;
                return (
                    <AboutSectionItem {...{ 
                        index,
                        text,
                        textType,
                        editType,
                        setAiFormModalOpen,
                        customTextStyle,
                        deleteSectionItem
                    }}
                    />
                )
            })}
        </div>
        {/* <FormDialog 
            isModalOpen={isAiFormMoalOpen} 
            setModalOpen={setAiFormModalOpen} 
            setGeneratedAiText={setGeneratedAiText}  /> */}
    </div>
  )
}

export default About;