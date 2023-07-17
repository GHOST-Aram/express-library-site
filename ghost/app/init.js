import express from 'express'
import createHttpError from 'http-errors';
import http from 'http'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import debuger from 'debug';
import mongoose from 'mongoose';

const app = express()
const router = express.Router()

const server = http.createServer(app);
const logger = morgan
const debug = debuger('express-local-library-site:server');
const createError = createHttpError

const Schema = mongoose.Schema
const model = mongoose.model

const use = (callback) =>{
    app.use(callback)
}


export {
    app, router, server, express, cookieParser, logger, debug,
    createError, use, Schema,model, mongoose
}
