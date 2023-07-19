import { router } from '../../ghost/app/init.js'
import { 
    book_create_get,
    book_create_post,
    book_delete_get,
    book_delete_post,
    book_update_get,
    book_update_post
} from '../controllers/book.js'


router.get('/create', book_create_get)
router.post('/create', book_create_post)
router.get('/:id/delete', book_delete_get)
router.post('/:id/delete', book_delete_post)
router.get('/:id/update', book_update_get)
router.post('/:id/update', book_update_post)

export { router }
