import { useState, useEffect } from "react";
import { validateEvents } from "../tools/validateForm";
import { initialEventData } from "../services/eventos"; 

export const useForm = () => {
    const [eventData, setEventData] = useState({ ...initialEventData });
    const [isValid, setIsValid] = useState(validateEvents(initialEventData));

    const handleInputChange = (field, value) => {
        setEventData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (eventData.image) {
                URL.revokeObjectURL(eventData.image); 
            }
            setEventData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
        }
    };

    useEffect(() => {
        setIsValid(validateEvents(eventData));
    }, [eventData]);

    return {
        eventData,
        isValid,
        handleInputChange,
        handleFileChange,
    };
};
