'use strict';

require('dotenv').config();

const http = require('http');
const app = require('./application');

const server = http.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
