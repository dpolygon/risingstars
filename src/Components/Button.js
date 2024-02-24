import React from 'react';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];
const CUSTOM = ['btn-one']

export default function Button(props) {
  const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];
  const checkCustom = CUSTOM.includes(props.custom) ? props.custom :null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkCustom}`}
      onClick={props.onClick}
      type={props.type}>
      {props.children}
    </button>
  );
}