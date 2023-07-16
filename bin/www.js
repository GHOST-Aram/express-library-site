import { app } from '../app.js';
import { server } from '../ghost/utils/init.js';
import { 
  normalizePort, 
  onError, 
  onListening 
} from '../ghost/utils/server.js'

  
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
