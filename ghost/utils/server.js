import { 
	cookieParser, 
	createError, 
	express, 
	logger, 
	server,
    debug, 
} from '../app/init.js';
export class Server {
    constructor(app){
        this.app = app
    }
    create404Error = () =>{
	    return createError(404)
    }

    triggerEvent = (event, handler) =>{
	    server.on(event, handler)
    }

    encodeUrl = (option) =>{
	    this.app.use(express.urlencoded(option))
    }

    listenRequests = (port) =>{
	    server.listen(port)
    }

    logRequests = (mode) =>{
	    this.app.use(logger(mode))
    }

    normalizePort = (val) =>{
        const port = parseInt(val, 10);

        if (isNaN(port)) 
            return val;

        if (port >= 0) 
            return port;
        return false;
    }
  
    onError = (error) =>{
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

    onListening = () =>{
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
            debug('Listening on ' + bind);
    }

    parseCookie = () =>{
        this.app.use(cookieParser())
    }

    parseJSON = () =>{
        this.app.use(express.json())
    }

    setPort = (port) =>{
        this.app.set('port', port);
    }

    serveStatics = (dirname) =>{
        this.app.use(express.static(dirname))
    }

    setTemplatesDir = (dirname) =>{
        this.app.set('views', dirname);
    }

    setViewEngine = (engine) =>{
        this.app.set('view engine', engine);
    }
}