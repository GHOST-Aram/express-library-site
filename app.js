import createHttpError from 'http-errors';
import  express  from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { router as indexRouter } from './catalog/routes/index.js'
import { router as usersRouter } from './catalog/routes/users.js'


const app = express();

// view engine setup
app.set('views', 'templates');
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('static'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  	next(createHttpError(404));
});

// error handler
app.use((err, req, res, next) =>{
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export {app}