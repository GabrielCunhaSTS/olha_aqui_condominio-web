import React from 'react';
import EventForm from '../components/form/eventForm';
import SubmitButton from '../components/button/submitBtn'
import { useForm } from '../hooks/formEvents';
import str from '../localized/text'; 
import '../styles/events.css';

const EventAdd = () => {
    const { eventData, isValid, handleInputChange, handleFileChange } = useForm();

    const handleSubmit = () => {
        alert(str.eventAdd.successMessage);
        console.log(eventData);
    };

    return (
        <div className="container">
            <h2 className="header">{str.eventAdd.title}</h2>
            <EventForm
                eventData={eventData}
                handleFileChange={handleFileChange}
                handleInputChange={handleInputChange}

            />
            <SubmitButton onClick={handleSubmit} isDisabled={!isValid} label={str.eventAdd.submitButton} />
        </div>
    );
};

export default EventAdd;
