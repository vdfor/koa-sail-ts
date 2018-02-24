#!/usr/bin/env node

//  Module dependencies
import * as http from 'http';
import app from './app';
import config from './config/config';
import logger from './common/logger';

// Normalize a port into a number, string, or false
const normalizePort = (val: string | number) => {
  const port = typeof val === 'number' ? val : parseInt(val, 10);
  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

// Get port from environment and store
const port = normalizePort(config.port);
// app.set('port', port);

// Create HTTP server
const server = http.createServer(app.callback());

// Event listener for HTTP server "listening" event
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  logger('http').debug(`Listening on ${bind}`);
};

// Event listener for HTTP server "error" event
const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    logger('http').error(error);
    throw error;
  }
  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger('http').error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger('http').error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      logger('http').error(error);
      throw error;
  }
};

// Listen on provided port, on all network interfacesListen on provided port, on all network interfaces
server.listen(port, () => {
  logger('startup').info('Server listening on port ', server.address().port, ' with pid ', process.pid);
});
server.on('error', onError);
server.on('listening', onListening);
