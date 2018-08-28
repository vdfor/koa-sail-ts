//  module dependencies
import * as http from 'http';
import app from './app';
import wsListener from './websocket';
import config from './config';
import { logger, tools } from './utils';

const { normalizePort } = tools;

// get port from environment
const port = normalizePort(config.port);
// // store port
// app.set('port', port);

// create HTTP server
const server = http.createServer(app.callback());

// event listener for HTTP server "listening" event
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  logger('http').debug(`Listening on ${bind}`);
};

// event listener for HTTP server "error" event
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

// websocket listener
wsListener(server);

// listen on provided port, on all network interfacesListen on provided port, on all network interfaces
server.listen(port, () => {
  logger('startup').info('Server listening on port ', port, ' with pid ', process.pid);
});
server.on('error', onError);
server.on('listening', onListening);
