const axios = require('axios');

const http = axios.create({
  baseURL: 'https://services-rs.7platform.com',
  timeout: 5000,
});

module.exports = http;
