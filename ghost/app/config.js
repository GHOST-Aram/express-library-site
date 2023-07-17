import { STATIC_DIR, TEMPLATES_DIR, VIEW_ENGINE } from '../../setting.js';
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
    serveStatics
} from '../utils/server.js'
  
const port = normalizePort(process.env.PORT || '3000');
  
export const config = () =>{
    listenRequests(port);
    triggerEvent('error', onError);
    triggerEvent('listening', onListening);
    setPort(port)
    setTemplatesDir(TEMPLATES_DIR)
    setViewEngine(VIEW_ENGINE)   
    logRequests('dev')
    parseJSON()
    encodeUrl({ extended: false })
    parseCookie()
    serveStatics(STATIC_DIR)
}