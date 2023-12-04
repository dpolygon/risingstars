import React from 'react';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];
const CUSTOM = ['btn-one']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  custom
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkCustom = CUSTOM.includes(custom) ? custom :null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkCustom}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};