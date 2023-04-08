import React, { useEffect, useRef, useState } from "react";
import './Editable.css';
import Button from "../button/Button";
import FormModal from '../modals/FormModal';

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
type EditableProps = {
    text: React.ReactNode;
    type: "input" | "textarea";
    placeholder: string;
    children: React.ReactNode;
    setAiFormModalOpen: (flag: boolean) => void;
    index: number;
    deleteSectionItem: (index: number) => void;
}

const Editable = ({
  text,
  type,
  placeholder,
  children,
  setAiFormModalOpen,
  index,
  deleteSectionItem,
  ...props
}: EditableProps) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [showEditTextOptions, setShowEditTextOptions] = useState(false);
  const sectionRef = useRef<any>(null);

  const buttonCustomStyle = {
    borderRadius: '50%',
    marginLeft: '5px',
    marginBottom: '3px',
    boxShadow: '0px 5px 9px gray',
    zIndex: 1,
  }

// Event handler while pressing any key while editing
  const handleKeyDown = (event: any, type: any) => {
    // Handle when key is pressed
  };

  const openAiFormDialog =  () =>  {
    setAiFormModalOpen(true)
    setShowEditTextOptions(false);
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!sectionRef.current?.contains(e.target)) {
        setShowEditTextOptions(false);
      }
    }
    document.addEventListener('mousedown', handler);
  }, [])

  useEffect(() => {
    if (!isEditing && text === '') {
      deleteSectionItem(index);
    }
  }, [isEditing, text])

  return (
    <>
    <section ref={sectionRef} {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <>
        {showEditTextOptions && (
          <div className="edit-text-options-btn-container">
            <Button 
              onClick={() => setEditing(true)}
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
          <div
            onClick={() => setShowEditTextOptions(true)}
            onBlur={() => setShowEditTextOptions(false)}
          >
            {text || <p>{placeholder}</p>}
          </div>
        </>
      )}
    </section>
    </>
  );
};

export default Editable;