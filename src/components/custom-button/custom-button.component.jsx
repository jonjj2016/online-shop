import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherPrrops }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
    {...otherPrrops}
  >
    {children}
  </button>
);
export default CustomButton;
