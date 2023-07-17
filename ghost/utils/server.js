import { 
	cookieParser, 
	express, 
	logger, 
	server,
} from '../app/init.js';
export class Server {
    constructor(app){
        this.app = app
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

    triggerEvent = (event, handler) =>{
	    server.on(event, handler)
    }
}