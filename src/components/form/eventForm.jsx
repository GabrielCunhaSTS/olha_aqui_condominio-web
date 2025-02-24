import React from 'react';
import InputField from '../input/input';
import formatDate from '../../tools/dataFormate';
import { validateEvents } from '../../tools/validateForm';
import str from '../../localized/text'; 

const EventForm = ({ eventData, handleInputChange, handleFileChange }) => {
    return (
        <div className="card">
            <InputField 
                label="Título" 
                value={eventData.title} 
                onChange={(value) => handleInputChange('title', value)} 
                validate={(value) => 
                    value.trim().length > 5 ? '' : str.validaton.title
                }
            />
            <InputField 
                label="Data" 
                value={eventData.date} 
                onChange={(value) => handleInputChange('date', formatDate(value))} 
                type="text" 
                validate={(value) => 
                    value.trim() ? '' : str.validaton.date
                }
            />
            <InputField 
                label="Local" 
                value={eventData.location} 
                onChange={(value) => handleInputChange('location', value)} 
                validate={(value) => 
                    value.trim().length > 3 ? '' : str.validaton.location
                }
            />
            <InputField 
                label="Descrição" 
                value={eventData.description} 
                onChange={(value) => handleInputChange('description', value)} 
                multiline 
                maxLength={300} 
                validate={(value) => 
                    value.trim().length > 10 ? '' : str.validaton.description
                }
            />
            <InputField 
                label="Fonte" 
                value={eventData.source} 
                onChange={(value) => handleInputChange('source', value)} 
                validate={(value) => 
                    value.trim().length > 2 ? '' : str.validaton.source
                }
            />
            <InputField 
                label="Link" 
                value={eventData.link} 
                onChange={(value) => handleInputChange('link', value)} 
                validate={(value) => 
                    /^https?:\/\/\S+$/.test(value) ? '' : str.validaton.link
                }
            />
            <div className="input-group">
                <label className="label">{str.photo}</label>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="input" 
                />
            </div>
            {eventData.image && (
                <img src={eventData.image} alt="Preview" className="image-preview" />
            )}
        </div>
    );
};

export default EventForm;
