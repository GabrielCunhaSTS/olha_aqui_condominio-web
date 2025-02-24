import React from 'react';
import InputField from '../input/input';
import { validateServiceForm } from '../../tools/validateForm'; 
import formatPhone from '../../tools/phoneFormate'; 
import str from '../../localized/text'; 

const ServiceForm = ({ serviceData, handleInputChange, handleFileChange }) => {
    return (
        <div className="card">
            <InputField 
                label="Nome" 
                value={serviceData.name} 
                onChange={(value) => handleInputChange('name', value)} 
                validate={(value) => 
                    value.trim().length > 5 ? '' : str.validaton.title 
                } 
            />
            <InputField 
                label="Tipo de Serviço" 
                value={serviceData.type} 
                onChange={(value) => handleInputChange('type', value)} 
                validate={(value) => 
                    value.trim().length > 2 ? '' : str.validaton.source 
                } 
            />
            <InputField 
                label="Telefone" 
                value={serviceData.phone}
                onChange={(value) => handleInputChange('phone', value)} 
                validate={(value) => 
                    /^\+55 \(\d{2}\) \d{4,5}-\d{4}$/.test(value) ? '' : "Número de telefone inválido."
                } 
            />
            <InputField 
                label="URL" 
                value={serviceData.url} 
                onChange={(value) => handleInputChange('url', value)} 
                validate={(value) => 
                    value.trim().length > 0 && /^https?:\/\/\S+$/.test(value) ? '' : str.validaton.link 
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
            {serviceData.image && (
                <img src={serviceData.image} alt="Preview" className="image-preview" />
            )}
        </div>
    );
};

export default ServiceForm;
