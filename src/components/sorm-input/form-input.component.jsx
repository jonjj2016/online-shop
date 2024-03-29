import React from 'react';
import './form-input.style.scss';
const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {
      <label
        className={`${props.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    }
  </div>
);
export default FormInput;
