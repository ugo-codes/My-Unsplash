const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, POST, DELETE',
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
