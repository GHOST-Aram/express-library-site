import express from 'express'
import createHttpError from 'http-errors';
import http from 'http'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import debuger from 'debug';
import mongoose from 'mongoose';
import expressAsychHandler from 'express-async-handler'


export const app = express()
export const router = express.Router()
export const asyncHandler = expressAsychHandler

export const server = http.createServer(app);
export const logger = morgan
export const debug = debuger('express-local-library-site:server');
export const createError = createHttpError

export const Schema = mongoose.Schema
export const model = mongoose.model

export const use = (callback) =>{
    app.use(callback)
}


export { express, cookieParser, mongoose }
