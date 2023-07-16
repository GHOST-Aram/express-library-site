import express from 'express'
import createHttpError from 'http-errors';
import http from 'http'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import debuger from 'debug';


const app = express()
const use = app.use
const router = express.Router()
const server = http.createServer(app);
const logger = morgan
const debug = debuger('express-local-library-site:server');
const createError = createHttpError



export {
    app, router, server, express, 
    cookieParser, logger, debug,
    createError, use
}
