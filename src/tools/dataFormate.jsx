const formatDate = (value) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned
        .replace(/^(\d{2})(\d)/, '$1/$2')
        .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
        .slice(0, 10);
};

export default formatDate;
