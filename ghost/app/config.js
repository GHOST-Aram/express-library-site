import { STATIC_DIR, TEMPLATES_DIR, VIEW_ENGINE } from '../../setting.js';
import { Server } from '../utils/server.js'
import { app } from './init.js';

const server = new Server(app)
const port = server.normalizePort(process.env.PORT || '3000');
  
export const config = () =>{
    server.listenRequests(port);
    server.triggerEvent('error', onError);
    server.triggerEvent('listening', onListening);
    server.setPort(port)
    server.setTemplatesDir(TEMPLATES_DIR)
    server.setViewEngine(VIEW_ENGINE)   
    server.logRequests('dev')
    server.parseJSON()
    server.encodeUrl({ extended: false })
    server.parseCookie()
    server.serveStatics(STATIC_DIR)
}