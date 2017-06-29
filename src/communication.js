import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

process.env.NODE_ENV === 'test' &&
  (axios.defaults.adapter = httpAdapter);

const requestAPI = (endpoint, config) => {
  const {
    backendBaseURL,
    backendBasePath,
  } = config;


  return axios.get(backendBaseURL + backendBasePath + endpoint);
};

export default requestAPI;
