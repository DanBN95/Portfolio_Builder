import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Editable.css';
import Button from '../button/Button';
import FormDialog from '../modals/FormModal';
import useDragger from '../../custom-hooks/useDragger';

const NUM_OF_ROWS = 5;
const NUM_OF_COLS = 5;

const buttonCustomStyle = {
  borderRadius: '50%',
  marginLeft: '5px',
  marginBottom: '3px',
  boxShadow: '0px 5px 9px gray',
  zIndex: 1,
}

type EditableProps = {
  text: string;
  setText: (text: string) => void;
  editType: "input" | "textarea";
  placeholder?: string;
  containerId: string;
}

function Editablee({
  text,
  setText,
  editType,
  placeholder = '',
  containerId
}: EditableProps) {

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(text);
  const [showEditTextOptions, setShowEditTextOptions] = useState<boolean>(false);
  const [isAiModalOpen, setAiModalOpen] = useState<boolean>(false);
  const [titleSize, setTitleSize] = useState<string>('');

  const sectionRef = useRef<any>();
  const textBoxRef = useRef<any>();

  useDragger({
    boxId: 'editable-box-id',
    containerId
  })

  // Event handler while pressing any key while editing
  const handleKeyDown = (event: any, type: any) => {
    // Handle when key is pressed
    console.log('pressed')
  };

  const onFinishEditing = useCallback(() => {
    let text = inputText;
    let regex = /#/g;
    let numOfHashLen = inputText.substring(0,3).split(regex).length - 1;
    if (numOfHashLen > 0) {
      setTitleSize(`title title-${numOfHashLen}`);
      text = inputText.substring(numOfHashLen).trim();
    }
    setText(text);
    setIsEditing(false)
  },[inputText]);

  const openAiFormDialog = () => {
    setAiModalOpen(true);
    setShowEditTextOptions(false);
  }
  

  const setGeneratedAiText = useCallback(
    (text: string, sectionName: string) => {
        setInputText(text);
        // setAboutSectionState({
        //     ...aboutSectionStates,
        //     [key]: text
        // })
    },[],
);

  const renderEditArea = useMemo(() => {
    switch (editType) {
      case 'input': {
        return (
          <input 
            type='text'
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
            onChange={e => setInputText(e.target.value)}
          />
        )
      } 
      default:
        break;
    }
  }, [editType, inputText]);

  useEffect(() => {
    let handler = (e: any) => {
      if (!sectionRef.current?.contains(e.target)) {
        setShowEditTextOptions(false);
      } 
    }
    document.addEventListener('mousedown', handler);

    return () => handler && document.removeEventListener("mousedown", handler);
  }, [])


  return (
    <>
    <section ref={sectionRef} className='section-container'>
      {isEditing ? (
        <div
          onBlur={onFinishEditing}
          onKeyDown={e => handleKeyDown(e, editType)}
        >
          {renderEditArea}
        </div>
      ) : (
        <>
        {showEditTextOptions && (
          <div className="edit-text-options-btn-container">
            <Button 
              onClick={() =>{ setIsEditing(true);}}
              customStyle={buttonCustomStyle}
            >
              Edit Text
            </Button>
            <Button 
              onClick={() => openAiFormDialog()}
              customStyle={buttonCustomStyle}
            >
              Generate Ai Text
            </Button>
          </div>
        )}
          <div className='text-container'
            onClick={() => setShowEditTextOptions(true)}
            onBlur={() => setShowEditTextOptions(false)}
          >
            {<div id='editable-box-id' ref={textBoxRef} className={`general-text ${titleSize}`}>{text}</div> || <p>{placeholder}</p>}
          </div>
        </>
      )}
    </section>
    <FormDialog 
        isModalOpen={isAiModalOpen}
        setModalOpen={setAiModalOpen}
        setGeneratedAiText={setGeneratedAiText}
        sectionName={"about"}
    />
    </>
  )
}

export default Editablee;