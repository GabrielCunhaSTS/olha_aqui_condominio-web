import React, { useState } from 'react';
import './InputField.css'; 

const InputField = ({ label, value, onChange, multiline = false, type = "text", options = [], validate, maxLength }) => {
    const [error, setError] = useState('');

    const handleBlur = () => {
        if (validate) {
            const validationError = validate(value);
            setError(validationError || '');
        }
    };

    return (
        
        <div className="input-group">
            <label className="label">{label}</label>
            
            {type === 'select' ? (
                <select
                    multiple
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    className="input"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === 'file' ? (
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    onBlur={handleBlur}
                    className="input"
                />
            ) : multiline ? (
                <div className="textarea-container">
                    <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onBlur={handleBlur}
    className="input"
    placeholder={`Digite ${label.toLowerCase()}`}
    maxLength={maxLength}
    style={{ height: "150px" }}
/>
                    <div className="char-counter">
                        {value.length}/{maxLength}
                    </div>
                </div>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={handleBlur}
                    className="input"
                    placeholder={`Digite ${label.toLowerCase()}`}
                />
            )}

            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default InputField;
