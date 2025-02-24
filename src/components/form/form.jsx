import React from 'react';
import InputField from '../input/input';
import formatDate from '../../tools/dataFormate';
import { validateForm } from '../../tools/validateForm';
import str from '../../localized/text'; 

const NewsForm = ({ newsData, handleInputChange, handleFileChange, handleTagChange }) => {
    const categories = ["Saúde", "Tecnologia", "Educação", "Política", "Economia", "Esportes"];

    return (
        <div className="card">
            <InputField 
                label="Título" 
                value={newsData.title} 
                onChange={(value) => handleInputChange('title', value)} 
                validate={(value) => 
                    value.trim().length > 5 ? '' : str.validaton.title
                } 
            />
            <InputField 
                label="Autor" 
                value={newsData.auth} 
                onChange={(value) => handleInputChange('auth', value)} 
                validate={(value) => 
                    value.trim().length > 2 ? '' : str.validaton.auth
                } 
            />
            <InputField 
                label="Descrição" 
                value={newsData.description} 
                onChange={(value) => handleInputChange('description', value)} 
                multiline 
                maxLength={200} 
                validate={(value) => 
                    value.trim().length > 10 ? '' : str.validaton.description
                } 
            />
            <InputField 
                label="Data" 
                value={newsData.date} 
                onChange={(value) => handleInputChange('date', formatDate(value))}
                type="text" 
                validate={(value) => 
                    value.trim() ? '' : str.validaton.date
                }
            />
            <div className="input-group">
                <label className="label">{str.category}</label>
                {categories.map((category, index) => (
                    <label key={index} className="checkbox-label">
                        <input 
                            type="checkbox" 
                            value={category} 
                            checked={newsData.tag.includes(category)} 
                            onChange={() => handleTagChange(category)} 
                        />
                        {category}
                    </label>
                ))}
            </div>
            <div className="input-group">
                <label className="label">{str.photo}</label>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="input" 
                />
            </div>
            {newsData.image && (
                <img src={newsData.image} alt="Preview" className="image-preview" />
            )}
        </div>
    );
};

export default NewsForm;
