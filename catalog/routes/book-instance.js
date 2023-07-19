import { router } from '../../ghost/app/init.js'
import { 
    bookinstance_create_get, 
    bookinstance_create_post,
    bookinstance_delete_get,
    bookinstance_delete_post,
    bookinstance_detail,
    bookinstance_update_get,
    bookinstance_update_post, 
} from '../controllers/book-instance.js'


router.get('/create', bookinstance_create_get)
router.post('/create', bookinstance_create_post)
router.get('/:id/delete', bookinstance_delete_get)
router.post('/:id/delete', bookinstance_delete_post)
router.get('/:id/update', bookinstance_update_get)
router.post('/:id/update', bookinstance_update_post)
router.get('/id',  bookinstance_detail)

export { router }

