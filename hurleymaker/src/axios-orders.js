import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hurleymaker-3342e-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;