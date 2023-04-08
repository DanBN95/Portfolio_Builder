import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Editable from '../../components/editable/Editable'
import { AboutSectionItemType } from '../../types'


const NUM_OF_ROWS = 5;
const NUM_OF_COLS = 5;
function AboutSectionItem({
    index,
    text,
    textType,
    editType,
    placeholder = '',
    setAiFormModalOpen,
    customTextStyle,
    deleteSectionItem
} : AboutSectionItemType) {

    const [inputText, setInputText] = useState(text);

    const renderText = useMemo(() => {
        switch(textType) {
            case 'title': {
                return (
                    <div className={customTextStyle}>
                        {inputText}
                    </div>
                );
            }
            case 'paragraph': {
                return (
                    <div>
                        <p className={customTextStyle}>{inputText}</p>
                    </div>
                );
            }
            case 'ul': {
                return (
                    <ul className='general-text'>
                        {inputText.split('\n').map((option) => <li className={customTextStyle}>{option}</li>)}
                    </ul>
                );
            }
            default: {
                return <div></div>
            }
        }
    },[textType, inputText]);

    const renderEditArea = useMemo(() => {
        switch(editType) {
            case 'input': {
                return (
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                    />
                )
            }
            case 'textarea': {
                return (
                    <textarea 
                        placeholder={placeholder}
                        rows={NUM_OF_ROWS}
                        cols={NUM_OF_COLS}
                        value={inputText}
                        onChange={e => {
                            console.log('here', e.target.value)
                            setInputText(e.target.value)}}
                    />
                )
            }
        }

      },[editType, inputText]);
    
     
  return (
    <Editable
        text={renderText}
        type={editType}
        placeholder={placeholder}
        setAiFormModalOpen={setAiFormModalOpen}
        index={index ? index : 0}
        deleteSectionItem={deleteSectionItem ? deleteSectionItem : () => {}}
    >
        {renderEditArea}
        
    </Editable>
  )
}

export default AboutSectionItem