import * as WebSocket from 'ws';
import * as http from 'http';
import logger from '../lib/logger';

interface Ws extends WebSocket {
  query?: { [key: string]: string | any };
  isAlive?: boolean;
}

// ws listener
const wsListener = (server: http.Server) => {

  // new ws server
  const wss = new WebSocket.Server({ server, path: '/ws' });

  // connection
  wss.on('connection', (ws: Ws, req) => {

    logger('websocket').info(`Successful connection with ${req.connection.remoteAddress}${req.url}`);

    // ws from
    const urlFrom = req && req.url && req.url.match(/\?from=([^&]*)/);
    ws.query = {};
    ws.query.from = urlFrom && urlFrom.length > 0 ? urlFrom[1] : null;

    // heartbeat isALive init
    ws.isAlive = true;

    // heartbeat pong
    ws.on('pong', () => {
      ws.isAlive = true;
    });

    // handle close
    ws.on('close', () => {
      logger('websocket').info('Connect closed');
    });

    // handle error
    ws.on('error', (error) => {
      logger('websocket').error(error.toString());
    });

    // from test
    if (ws.query.from === 'test') {
      // handle message
      ws.on('message', (message) => {
        console.log(message);
      });
    } else {
      ws.terminate();
    }
  });

  // interval heartbeat ping
  setInterval(
    () => {
      wss.clients.forEach((ws: Ws) => {
        if (!ws.isAlive) {
          ws.terminate();
          return;
        }
        ws.isAlive = false;
        ws.ping(() => {
          console.log('ws ping: noop');
        });
      });
    },
    30000);
};

export default wsListener;
