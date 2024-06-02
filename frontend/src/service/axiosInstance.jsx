import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3500/client',
  
  });

  export default instance;

  
  
 