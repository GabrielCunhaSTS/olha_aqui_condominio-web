import { useState, useEffect } from "react";
import { validateServiceForm } from "../tools/validateForm";
import { initialServiceData } from "../services/service";
import formatPhone from "../tools/phoneFormate";

export const useServiceForm = () => {
    const [serviceData, setServiceData] = useState({
        ...initialServiceData,
        phone: "+55 ", 
    });

    const [isValid, setIsValid] = useState(validateServiceForm(initialServiceData));

    const handleInputChange = (field, value) => {
        if (field === "phone") {
            let cleaned = value.replace(/[^\d]/g, "");

            if (!cleaned.startsWith("55")) {
                cleaned = "55" + cleaned.replace(/^55/, "");
            }

            cleaned = cleaned.slice(0, 13);

            setServiceData((prev) => ({
                ...prev,
                phone: formatPhone(cleaned),
            }));
        } else {
            setServiceData((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (serviceData.image) {
                URL.revokeObjectURL(serviceData.image);
            }
            setServiceData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
        }
    };

    useEffect(() => {
        setIsValid(validateServiceForm(serviceData));
    }, [serviceData]);

    return {
        serviceData,
        isValid,
        handleInputChange,
        handleFileChange,
    };
};
