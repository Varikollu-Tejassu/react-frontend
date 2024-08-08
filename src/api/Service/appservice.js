
import { axiosInstance,handleAxiosError } from '../interface'; 

// Function to fetch data from the backend
export const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/');
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;  // Re-throw the error so it can be handled further
    }
  };
  