import { config } from '../ghost/app/config.js';
import { router as catalogRouter } from '../ghost/app/init.js';
import { 
    router as booksRouter,
    index, book_list 
} from './routes/book.js';
import { router as authorsRouter, author_list } from './routes/author.js'
import { 
    router as bookInstanceRouter, 
    bookinstance_list 
} from './routes/book-instance.js'
import { router as genreRouter, genre_list } from './routes/genre.js'

config()
catalogRouter.get('/', index)
catalogRouter.get('/authors', author_list)
catalogRouter.get('books', book_list)
catalogRouter.get('/bookinstances', bookinstance_list)
catalogRouter.get('/genres', genre_list)
catalogRouter.use('/book', booksRouter);
catalogRouter.use('/author', authorsRouter)
catalogRouter.use('/bookinstance', bookInstanceRouter)
catalogRouter.use('/genres', genreRouter)

  
export{ catalogRouter }
