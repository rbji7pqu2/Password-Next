import axios from "axios";

const api: string = 'https://api.password.688828.xyz';

const request = axios.create({
    baseURL: api,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
});

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('localToken');
    }
    return null;
};

const Get = (url: string, params: object) => {
    const token = getToken();
    return request.get(url, {
        params,
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        },
    });
};

const Post = (url: string, data: object) => {
    const token = getToken();
    return request.post(url, data, {
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
        },
    });
};

export { Get, Post };
