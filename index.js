const api = require('./src/api');

api.monitoring.isHealthy().then((status) => {
  console.log(status);
});
