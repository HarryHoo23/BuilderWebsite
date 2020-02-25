import axios from 'axios';

const instance = axios.create({
    baseURL: "https://neat-vent-254802.firebaseio.com/"
});

export default instance;