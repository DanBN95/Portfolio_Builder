import React, { useState } from 'react';
import './About.css';
import ComputerSeatImage from '../../images/about-me-reg-far.jpeg';
import { aboutSectionString } from './AboutSectionStrings';
import Editable from '../../components/editable/Editable';
import { AboutSectionType } from '../../types';
import FormDialog from '../../components/modals/FormModal';

const ABOUT_SECTION_STRINGS = {
    shortAboutDesc: " Motivated Full-Stack Developer with a Bachelor's degree in Computer Science and hands-on experience in developing high- quality applications using React Native. Seeking a challenging Software Engineer position that will allow me to further my knowledge and skills as well as increased responsibility in an innovative company.",
    experiencePara: "One year experience as a Mobile Developer at Matrix company.\n Accomplished React-Native developer with expertise in JavaScript, React- Native architecture, Redux, and Typescript.\nSuccessfully delivered visually appealing IOS and Android app projects from scratch and enhanced existing projects.\nProficient in UI/UX platforms such as Figma and Xd.\nProven experience in updating libraries, making OS adjustments, and uploading new versions to stores.\nAdept at independently integrating with servers and clients and providing valuable development solutions.\nCollaborated effectively with skilled team members and demonstrated excellent problem-solving skills.\nUtilized project management tools such as Jira and Bitbucket to efficiently manage projects.",
    educationPara: "Bachelor degree in Computer Science with Full-Stack proficiency"
}

function About() {

    const [aboutSectionStates, setAboutSectionState] = useState({
        aboutTitle: "About",
        shortAboutDesc: ABOUT_SECTION_STRINGS.shortAboutDesc,
        experienceTitle: "Experience",
        experienceDesc: ABOUT_SECTION_STRINGS.experiencePara,
        educationTitle: "Education",
        educationDesc: ABOUT_SECTION_STRINGS.educationPara
    });

    const { 
        aboutTitle, 
        shortAboutDesc,
        experienceTitle,
        experienceDesc,
        educationTitle,
        educationDesc
    } = aboutSectionStates;
    const [isAiFormMoalOpen, setAiFormModalOpen] = useState(false);

    const onMouseEnter = () => {
        console.log('### generate modal');
    }

    /* 
        {
            text: ,
            editType: 
            placeholder: 
            value,
            setValue,
            isUlTag
        }
    */


  return (
    <div className='body-container'>
        <div className='img-container'>
            <img src={ComputerSeatImage} style={{ height: '100vh', width: '100%', objectFit: 'contain'}}></img>
        </div>
        <div className='about-container'>
            <Editable
                text={
                    <div className='about-title'>
                        {aboutTitle}
                    </div>
                }
                type="input"
                placeholder='About-Title'
                setAiFormModalOpen={setAiFormModalOpen}
            >
                <input 
                    type="text"
                    placeholder='Write about title'
                    value={aboutTitle}
                    onChange={e => setAboutSectionState({...aboutSectionStates, aboutTitle: e.target.value})}
                />
            </Editable>
            <Editable
                text={
                    <div className='about-para-container' onMouseEnter={onMouseEnter}>
                        <p className='about-para'>
                            {shortAboutDesc}
                        </p>
                    </div>
                } 
                type="textarea"
                placeholder='About-Description'
                setAiFormModalOpen={setAiFormModalOpen}
            >
                <textarea 
                    name='about-description'
                    placeholder='Write description about yourself'
                    cols={55}
                    rows={5}
                    value={shortAboutDesc}                    
                    onChange={e => setAboutSectionState({...aboutSectionStates, shortAboutDesc: e.target.value })}
                />
            </Editable>
            <ul>
                <Editable
                    text={
                        <p className="sub-title">{experienceTitle}</p>
                    }
                    type="input"
                    placeholder='Experience-Title'
                    setAiFormModalOpen={setAiFormModalOpen}
                >
                    <input 
                        type="text"
                        placeholder='Experience title'
                        value={experienceTitle}
                        onChange={e => setAboutSectionState({...aboutSectionStates, experienceTitle: e.target.value})}
                    />
                </Editable>
                <Editable
                    text={
                        experienceDesc.split('\n').map((li: string, li_index: number) => {
                            return (
                                <li key={`${li_index}-${li}`} className="about-para">{li}</li>
                            )
                        })
                    }
                    type="textarea"
                    placeholder='Experience description'
                    setAiFormModalOpen={setAiFormModalOpen}
                >
                    <textarea 
                        name='experience-description'
                        placeholder='Write description about your work experience and skills'
                        cols={55}
                        rows={5}
                        value={experienceDesc}                    
                        onChange={e => setAboutSectionState({...aboutSectionStates, experienceDesc: e.target.value })} 
                    />
                </Editable>
            </ul>
            <Editable
                text={
                    <div className="sub-title">
                        {educationTitle}
                    </div>
                }
                type="input"
                placeholder="Education title"
                setAiFormModalOpen={setAiFormModalOpen}
            >
                <input
                    type="text"
                    placeholder='Add education title'
                    value={educationTitle}
                    onChange={e => setAboutSectionState({...aboutSectionStates, educationTitle: e.target.value })}
                />
                
            </Editable>
            <Editable
                text={
                    <div className='about-para-container' onMouseEnter={onMouseEnter}>
                        <p className='about-para'>
                            {educationDesc}
                        </p>
                    </div>
                }
                type='textarea'
                placeholder='Education description'
                setAiFormModalOpen={setAiFormModalOpen}
            >
                <textarea 
                        name='education-description'
                        placeholder='Write description about your education'
                        cols={55}
                        rows={5}
                        value={educationDesc}                    
                        onChange={e => setAboutSectionState({...aboutSectionStates, educationDesc: e.target.value })}                 
                />
            </Editable>
        </div>
        <FormDialog isModalOpen={isAiFormMoalOpen} setModalOpen={setAiFormModalOpen}  />
    </div>
  )
}

export default About;