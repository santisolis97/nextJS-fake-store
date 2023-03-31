import axios from 'axios';

export const requestGet = async (path, axiosConfig) => {
  const response = await axios.get(path, axiosConfig);

  return response.data;
};
