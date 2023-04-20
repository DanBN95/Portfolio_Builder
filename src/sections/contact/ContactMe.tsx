import React, { useRef, useState } from 'react';
import './ContactMe.css';
import Editablee from '../../components/editable/Editablee';

function ContactMe() {
    const [text, setText] = useState<string>('###fdsfsd');

    
  return (
    <div id='contact-container-id' className='body-container'>
        <Editablee 
            text={text}
            setText={setText}
            editType='textarea'
            containerId='contact-container-id'
        />
    </div>
  )
}

export default ContactMe;