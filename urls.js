import { app, use } from './ghost/app/init.js';
import { create404Error } from './ghost/utils/server.js';
import { router as catalogRouter } from './catalog/urls.js'

use(catalogRouter);

// catch 404 and forward to error handler
use((req, res, next) =>{
  	next(create404Error());
});

// error handler
use((err, req, res, next) =>{
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export {app}