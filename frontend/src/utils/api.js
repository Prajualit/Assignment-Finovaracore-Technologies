import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;