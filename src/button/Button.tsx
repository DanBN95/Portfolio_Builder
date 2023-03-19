import React from 'react';
import './Button.css';

const STYLES = [
  'btn-primary',
  'btn-outline'
];

const SIZES = [
  'btn--meduim',
  'btn-large'
];

interface Props {
  children?: string;
  // children?: React.ReactNode;
  type?: string;
  onClick?: () => void;
  buttonStyle?: any;
  buttonSize?: any;
}

const Button: React.FC<Props> = (
  { 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
  }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button 
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button