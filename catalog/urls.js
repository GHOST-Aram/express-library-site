import { config } from '../ghost/app/config.js';
import { router as catalogRouter } from '../ghost/app/init.js';
import { router as booksRouter } from './routes/book.js';
import { index, book_list } from './controllers/book.js';
import { router as authorsRouter } from './routes/author.js'
import { author_list } from './controllers/author.js';
import { router as bookInstanceRouter } from './routes/book-instance.js'
import { bookinstance_list } from './controllers/book-instance.js';
import { router as genreRouter } from './routes/genre.js'
import { genre_list } from './controllers/genre.js';

config()
catalogRouter.get('/', index)
catalogRouter.get('/authors', author_list)
catalogRouter.get('/books', book_list)
catalogRouter.get('/bookinstances', bookinstance_list)
catalogRouter.get('/genres', genre_list)
catalogRouter.use('/books', booksRouter);
catalogRouter.use('/authors', authorsRouter)
catalogRouter.use('/bookinstances', bookInstanceRouter)
catalogRouter.use('/genres', genreRouter)

  
export{ catalogRouter }
