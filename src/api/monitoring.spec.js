const axios = require('axios');
const monitoring = require('./monitoring');

axios.get.mockResolvedValue({
  data: {
    status: 'UP',
  },
});

test('should fetch status', (done) => {
  monitoring.isHealthy().then((result) => {
    expect(result.status).toEqual('UP');
    done();
  });
});
