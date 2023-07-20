import { app } from './ghost/app/init.js';
import { create404Error } from './ghost/utils/http-response.js';
import { catalogRouter } from './catalog/urls.js'


app.use('/catalog', catalogRouter)

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