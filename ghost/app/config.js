import { 
    app, server, express, 
    logger, cookieParser
} from "./init.js";
import { 
    normalizePort, onError, 
    onListening,
} from '../server/utils.js'
  
    
  const port = normalizePort(process.env.PORT || '3000');
  
  export const config = () =>{
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    app.set('port', port);
    app.set('views', 'templates');
    app.set('view engine', 'pug');
    
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static('static'));
}