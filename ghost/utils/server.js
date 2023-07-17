import { 
	cookieParser, 
	createError, 
	express, 
	logger, 
	server,
    debug,
    app 
} from '../app/init.js';

export const create404Error = () =>{
	return createError(404)
}

export const triggerEvent = (event, handler) =>{
	server.on(event, handler)
}
export const encodeUrl = (option) =>{
	app.use(express.urlencoded(option))
}
export const listenRequests = (port) =>{
	server.listen(port)
}
export const logRequests = (mode) =>{
	app.use(logger(mode))
}
export const normalizePort = (val) =>{
	const port = parseInt(val, 10);

	if (isNaN(port)) 
		return val;

	if (port >= 0) 
		return port;
	return false;
}
  
export const onError = (error) =>{
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

export const onListening = () =>{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
}

export const parseCookie = () =>{
	app.use(cookieParser())
}

export const parseJSON = () =>{
	app.use(express.json())
}

export const setPort = (port) =>{
	app.set('port', port);
}

export const serverStatics = (dirname) =>{
	app.use(express.static(dirname))
}

export const setTemplatesDir = (dirname) =>{
	app.set('views', dirname);
}

export const setViewEngine = (engine) =>{
	app.set('view engine', engine);
}