export const validateForm = (newsData) => {
    return (
        Boolean(newsData.title?.trim().length > 5) &&
        Boolean(newsData.auth?.trim().length > 2) &&
        Boolean(newsData.description?.trim().length > 10) &&
        Boolean(newsData.tag?.length >= 1 && newsData.tag?.length <= 3)
    );
};

export const validateEvents = (eventData) => {
    return (
        Boolean(eventData.title?.trim().length > 5) &&
        Boolean(eventData.description?.trim().length > 10) &&
        Boolean(eventData.location?.trim().length > 3) &&
        Boolean(eventData.source?.trim().length > 2) &&
        Boolean(/^https?:\/\/\S+$/.test(eventData.link))
    );
};

export const validateServiceForm = (serviceData) => {
    return (
        Boolean(serviceData.name?.trim().length > 5) && 
        Boolean(serviceData.type?.trim().length > 2) && 
        Boolean(/^\+55 \(\d{2}\) \d{4,5}-\d{4}$/.test(serviceData.phone)) && 
        Boolean(serviceData.url?.trim().length > 0 && /^https?:\/\/\S+$/.test(serviceData.url))
    );
};

