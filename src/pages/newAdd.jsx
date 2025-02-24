import React from 'react';
import NewsForm from '../components/form/form';
import SubmitButton from '../components/button/submitBtn'
import { useForm } from '../hooks/formNews';
import str from '../localized/text'; 
import '../styles/NewsRegistrationScreen.css';

const newAdd = () => {
    const { newsData, isValid, handleInputChange, handleFileChange, handleTagChange } = useForm();

    const handleSubmit = () => {
        alert(str.newsAdd.successMessage);
        console.log(newsData);
    };

    return (
        <div className="container">
            <h2 className="header">{str.newsAdd.title}</h2>
            <NewsForm
                newsData={newsData}
                handleInputChange={handleInputChange}
                handleFileChange={handleFileChange}
                handleTagChange={handleTagChange}
            />
            <SubmitButton onClick={handleSubmit} isDisabled={!isValid} label={str.newsAdd.submitButton} />
        </div>
    );
};

export default newAdd;
