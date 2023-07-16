import { 
    normalizePort, 
    onError, 
    onListening, 
    setPort,
    setViewEngine, 
    setTemplatesDir, 
    encodeUrl,
    parseCookie,
    parseJSON,
    logRequests,
    listenRequests,
    triggerEvent,
    serverStatics
} from '../utils/server.js'
  
const port = normalizePort(process.env.PORT || '3000');
  
export const config = () =>{
    listenRequests(port);
    triggerEvent('error', onError);
    triggerEvent('listening', onListening);
    setPort(port)
    setTemplatesDir('templates')
    setViewEngine('pug')   
    logRequests('dev')
    parseJSON()
    encodeUrl({ extended: false })
    parseCookie()
    serverStatics('static')
}