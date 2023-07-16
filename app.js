import { app } from './ghost/app/init.js';
import { create404Error } from './ghost/server/utils.js';
import { router as indexRouter } from './catalog/routes/index.js'
import { router as usersRouter } from './catalog/routes/users.js'
import { config } from './ghost/app/config.js';


config()
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  	next(create404Error());
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