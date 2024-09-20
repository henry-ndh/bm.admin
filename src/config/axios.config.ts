import axios from 'axios';
import helpers from '../helpers';

const baseURL = 'https://localhost:7093/';
axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(
  async (config) => {
    try {
      const token = await helpers.cookie_get('AT');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
var BaseRequest = {
  Get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
  Post: async (url: string, data: any) => {
    const response = await axios.post(url, data);
    return response.data;
  },
  Put: async (url: string, data: any) => {
    const response = await axios.put(url, data);
    return response.data;
  },
  Delete: async (url: string) => {
    const response = await axios.delete(url);
    return response.data;
  }
};

export default BaseRequest;
