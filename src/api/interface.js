import axios from 'axios';
const API_URL = 'http://10.0.0.47:8000'; // Replace with your backend server URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Example function to handle Axios errors
const handleAxiosError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    console.error('Request failed with status code:', error.response.status);
    console.error('Response data:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request made but no response received:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error setting up the request:', error.message);
  }
};

export {axiosInstance,handleAxiosError};
