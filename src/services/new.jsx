export const initialNewsData = {
    id: crypto.randomUUID(),
    title: '',
    auth: '',
    description: '',
    date: '',
    url: '',
    content: '',
    tag: [],
    highlighted: false,
    image: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
};
