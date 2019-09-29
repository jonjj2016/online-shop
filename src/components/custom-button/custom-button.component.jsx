import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherPrrops
}) => (
  <button
    className={` ${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    }  custom-button`}
    {...otherPrrops}
  >
    {children}
  </button>
);
export default CustomButton;
