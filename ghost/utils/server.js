import debuger from 'debug';
import { server } from './init.js';

const debug = debuger('express-local-library-site:server');

const normalizePort = (val) =>{
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
      return val;
    }
    
    if (port >= 0) {
      return port;
    }
    
    return false;
  }
  


const onError = (error) =>{
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
        default:
            throw error;
        }
    }

const onListening = () =>{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
}

export { normalizePort, onError, onListening }