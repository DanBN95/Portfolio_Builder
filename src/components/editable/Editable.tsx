import React, { useState } from "react";
import Button from "../button/Button";
import FormModal from '../modals/FormModal';

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
type EditableProps = {
    text: React.ReactNode;
    type: "input" | "textarea";
    placeholder: string;
    children: React.ReactNode;
    setAiFormModalOpen: (flag: boolean) => void;
}

const Editable = ({
  text,
  type,
  placeholder,
  children,
  setAiFormModalOpen,
  ...props
}: EditableProps) => {
  // Manage the state whether to show the label or the input box. By default, label will be shown.
// Exercise: It can be made dynamic by accepting initial state as props outside the component 
  const [isEditing, setEditing] = useState<boolean>(false);
  const [showEditTextOptions, setShowEditTextOptions] = useState(false);

  const buttonCustomStyle = {
    borderRadius: '50%',
    marginLeft: '15px',
    boxShadow: '0px 5px 9px gray',
    zIndex: 1
  }

// Event handler while pressing any key while editing
  const handleKeyDown = (event: any, type: any) => {
    // Handle when key is pressed
  };

  const openAiFormDialog =  () =>  {
    setAiFormModalOpen(true)
    setShowEditTextOptions(false);
  };

/*
- It will display a label is `isEditing` is false
- It will display the children (input or textarea) if `isEditing` is true
- when input `onBlur`, we will set the default non edit mode
Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
*/
  return (
    <>
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <>
        {showEditTextOptions ? (
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
        ) : (
          <div
            onClick={() => setShowEditTextOptions(true)}
          >
            {text || <p>{placeholder}</p>}
          </div>
        )}
        </>
      )}
    </section>
    </>
  );
};

export default Editable;