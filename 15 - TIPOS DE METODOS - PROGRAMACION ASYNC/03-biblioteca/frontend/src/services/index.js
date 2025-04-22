import axios from 'axios';

const baseURL = 'http://localhost:8080/books'

const BookService = {
    getAll: async () => await axios.get(baseURL),
    getById: async (id) => await axios.get(`${baseURL}/${id}`),
    create: async (book) => await axios.post(baseURL, book),
    update: async (id, book) => await axios.put(`${baseURL}/${id}`, book),
    delete: async (id) => await axios.delete(`${baseURL}/${id}`),
};

export default BookService