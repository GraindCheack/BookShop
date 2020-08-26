import React from 'react';

export default function RenderField({ input, placeholder, required=false }) {
  return (
    <input className="form-control filter-input" type="text" placeholder={placeholder} {...input} autoComplete='off' required={required}/>
  );
};

