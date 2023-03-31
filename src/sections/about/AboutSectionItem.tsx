import React from 'react'
import Editable from '../../components/editable/Editable'
import { AboutSectionItemType } from '../../types'

function AboutSectionItem({
    text,
    editType,
    placeholder,
    value,
    setValue,
    isUlTag
} : AboutSectionItemType) {

    const defaultInputProps = {
        type: "text",
        placeholder,
        value,
        onChange: (e: any) => setValue(e.target.value)
    }
    const defaultTextareaProps = {
        placeholder,
        cols: 55,
        rows: 5,
        value,                  
        onChange: (e: any) => setValue(e.target.value)
    }

    const CustomTag = (editType === 'input' ? `<input ${defaultInputProps}>` : `<textarea ${defaultTextareaProps}>`) as keyof JSX.IntrinsicElements;

    const renderText = () => {
        if (isUlTag) {
            
        }
    }


  return (
    <></>
    // <Editable
    //     text={text}
    //     type={editType}
    //     placeholder={placeholder}
    // >
    //     <CustomTag />
    // </Editable>
  )
}

export default AboutSectionItem