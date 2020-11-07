import axios from 'axios';

const setUpAxios = () =>{
    axios.defaults.baseURL = "http://localhost:3001";
    axios.interceptors.request.use(req => {
        const token = localStorage.getItem('token');
        console.log('token', token);

        if(token){
            req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
    })
}

export default setUpAxios;