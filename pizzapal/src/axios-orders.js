import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizza-pal-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;