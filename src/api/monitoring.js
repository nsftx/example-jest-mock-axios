const http = require('./http');

module.exports = {
  async isHealthy() {
    const response = await http.get('/monitoring/healthcheck');
    return response.data;
  },
};
