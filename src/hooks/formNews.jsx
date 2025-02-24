import { useState, useEffect } from "react";
import { validateForm } from "../tools/validateForm";
import { initialNewsData } from "../services/new";

export const useForm = () => {
    const [newsData, setNewsData] = useState({ ...initialNewsData });
    const [isValid, setIsValid] = useState(validateForm(initialNewsData));

    const handleInputChange = (field, value) => {
        setNewsData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (newsData.image) {
                URL.revokeObjectURL(newsData.image); 
            }
            setNewsData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
        }
    };

    const handleTagChange = (category) => {
        setNewsData((prev) => {
            let updatedTags = [...prev.tag];

            if (updatedTags.includes(category)) {
                updatedTags = updatedTags.filter(tag => tag !== category);
            } else if (updatedTags.length < 3) {
                updatedTags.push(category);
            } else {
                alert("Você pode selecionar no máximo 3 categorias.");
                return prev; 
            }

            return { ...prev, tag: updatedTags };
        });
    };

    useEffect(() => {
        setIsValid(validateForm(newsData));
    }, [newsData]);

    return {
        newsData,
        isValid,
        handleInputChange,
        handleFileChange,
        handleTagChange,
    };
};
