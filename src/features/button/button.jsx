import React from 'react';
import './button.scss';

const Button = ({ children, buttonId, onClick, disabled, type }) => (
  <button
    onClick={onClick}
    id={buttonId}
    disabled={disabled}
    type={type}
    className="component-event"
  >
    {children}
  </button>
);

export default Button;
