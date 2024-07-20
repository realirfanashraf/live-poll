import axios from 'axios';

export const validateToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
        const response = await axios.post('http://5173/auth/validateToken', { token });
        if (response.data.valid) {
            return true;
        } else {
            localStorage.removeItem('token');
            return false;
        }
    } catch (error) {
        console.log(error);
        localStorage.removeItem('token');
        return false;
    }
};
