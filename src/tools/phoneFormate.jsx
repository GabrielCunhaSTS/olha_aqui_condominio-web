const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, ""); 

    if (!cleaned.startsWith("55")) {
        return "+55 ";
    }

    const match = cleaned.match(/^55(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
        return `+55 ${match[1] ? `(${match[1]}) ` : ""}${match[2]}${match[3] ? `-${match[3]}` : ""}`;
    }

    return "+55 "; 
};

export default formatPhone;
