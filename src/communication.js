import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

process.env.NODE_ENV === 'test' &&
  (axios.defaults.adapter = httpAdapter);

const requestAPI = (endpoint, config) => {
  const {
    backendBaseURL,
    backendBasePath,
    useMocks,
    mockPath,
  } = config;

  const hostname = useMocks
    ? `http://localhost:3000/${mockPath}/`
    : backendBaseURL + backendBasePath;
  return axios.get(hostname + endpoint);
};

export default requestAPI;
