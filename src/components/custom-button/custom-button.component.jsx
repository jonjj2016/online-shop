import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, ...otherPrrops }) => (
  <button className="custom-button" {...otherPrrops}>
    {children}
  </button>
);
export default CustomButton;
