import React from 'react'
import Editable from '../../components/Editable'
import { AboutSectionItemType } from '../../types'

function AboutSectionItem({
    text,
    editType,
    placeholder,
    value,
    setValue,
    isUlTag,
    customContainerStyle,
    textStyle
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

    const CustomTag = (editType === 'input' ? `<input>` : `<textarea>`) as keyof JSX.IntrinsicElements;


  return (
    <Editable
        text={
            isUlTag ? (
                <ul className={customContainerStyle}>
                    {value.split('\n').map((li: string, li_index: number) => {
                            return (
                                <li key={`${li_index}-${li}`} className={textStyle}>{li}</li>
                            )
                    })}
                </ul>
            ) : (
                <div className={editType === 'input' ? textStyle : customContainerStyle}>
                    {editType === 'input' ? value :  <p className={textStyle}>{value}</p>}
                </div>
            )
        }
        type={editType}
        placeholder={placeholder}
    >
        {editType === 'input' ? (
            <input {...defaultInputProps}/>
        ) : (
            <textarea {...defaultTextareaProps} />
        )}
    </Editable>
  )
}

export default AboutSectionItem