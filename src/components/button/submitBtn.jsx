import React from 'react';

const SubmitButton = ({ onClick, isDisabled, label }) => (
    <button 
        className={`submit-button ${isDisabled ? 'disabled' : ''}`} 
        onClick={onClick} 
        disabled={isDisabled}
    >
        {label}
    </button>
);

export default SubmitButton;
