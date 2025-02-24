import React from 'react';
import ServiceForm from '../components/form/serviceForm';
import SubmitButton from '../components/button/submitBtn';
import { useServiceForm } from '../hooks/formService';
import str from '../localized/text'; 

const ServiceAdd = () => {
    const { serviceData, isValid, handleInputChange, handleFileChange } = useServiceForm();

    const handleSubmit = () => {
        alert(str.serviceAdd.successMessage);
        console.log(serviceData);
    };

    return (
        <div className="container">
            <h2 className="header">{str.serviceAdd.title}</h2>
            <ServiceForm
                serviceData={serviceData}
                handleFileChange={handleFileChange}
                handleInputChange={handleInputChange}
            />
            <SubmitButton onClick={handleSubmit} isDisabled={!isValid} label={str.serviceAdd.submitButton} />
        </div>
    );
};

export default ServiceAdd;
