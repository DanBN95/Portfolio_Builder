import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useGetAITextMutation } from '../../features/chatgptAPI/chatgptSlice';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

interface FormDialog {
    isModalOpen: boolean;
    setModalOpen: (modalState: boolean) => void;
    setGeneratedAiText: (text: string, sectionName: string) => void;
    sectionName: string;
}
type textFiledsType = {
    name: string;
    curJobRole: string;
    desiredJobRole: string;
    goodToKnow: string;
}
const textFields = [
    {
        id: 'name',
        label: 'First Name',
        type: "text",
        multiline: false
    },
    {
        id: 'curJobRole',
        label: 'Current Job Role',
        type: "text",
        multiline: false
    },
    {
        id: 'desiredJobRole',
        label: 'Desired Job Role',
        type: "text",
        multiline: false
    },
    {
        id: 'goodToKnow',
        label: 'Good To Know About You',
        type: "text",
        multiline: true
    },
];
const initialState = textFields.reduce((acc, field) => {
    const { id } = field;
    return { ...acc, [id]: '' };
}, {}); 
console.log(initialState)

export default function FormDialog({ isModalOpen, setModalOpen, setGeneratedAiText, sectionName }: FormDialog) {
     
    const [fields, setFields] = useState<textFiledsType>(initialState as textFiledsType);
    const [isLoading, setLoading] = useState<boolean>(false);

    const [getText] = useGetAITextMutation();

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTextChange = (e: any) => {
    const { value, name } = e.target;
    setFields({
        ...fields,
        [name]: value
    });
  }

  const generateAiText = async () => {
    setLoading(true);
    const prompt = generatePromptQueryForGpt();
    console.log('### prompt: ', prompt);
    const { data: { content } }: any = await getText(prompt);
    console.log('data', content);
    setGeneratedAiText(content, sectionName);
    resetFields();
    setLoading(false);
    setModalOpen(false);
  };

  const generatePromptQueryForGpt = (): string => {
    const { name, curJobRole, desiredJobRole, goodToKnow } = fields;
    return `Generate me a short ${sectionName} description for my portfolio by the following criteria:
    My name is ${name} I am a ${curJobRole} and I am looking for ${desiredJobRole} role. 
    Also good to know about me it is that: ${goodToKnow}`
  }

  const resetFields = () => {
    const tempFields = { ...fields };
    let key: keyof typeof tempFields;
    for (key in tempFields) {
      tempFields[key] = '';
    }
    setFields(tempFields);
  }
  


  return (
    <div>
      <Dialog open={isModalOpen} onClose={handleClose} scroll='body'>
          {isLoading && <LoadingSpinner />}
        <DialogTitle>Let Ai Generate Your Text!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the form in the following fields to get accurate details 
          </DialogContentText>
          {textFields.map((field, index) => {
            // console.log('### field:', fields);
            const { id, type, label, multiline } = field;
            return (
                <TextField
                  key={index}
                  value={fields[id as keyof typeof fields]}
                  onChange={handleTextChange}
                  name={id}
                  autoFocus
                  margin="dense"
                  id={id}
                  label={label}
                  type={type}
                  multiline={multiline}
                  fullWidth
                  variant="standard"
                />
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button disabled={isLoading} onClick={handleClose}>Cancel</Button>
          <Button disabled={isLoading} onClick={generateAiText}>Generate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}