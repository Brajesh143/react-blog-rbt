import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';

let token = localStorage.getItem('token')

const createConfig = (method, url, data) => {
    if (method === 'post' || method === 'put') {
        return {
            method: method,
            maxBodyLength: Infinity,
            url: BASE_URL+''+url,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: data
        };
    }

    return {
        method: method,
        url: BASE_URL+''+url
    }
}

const sendRequest = async(method, url, data=null) => {
    const response = await axios.request(createConfig(method, url, data));

    return response;
}

export {sendRequest};



