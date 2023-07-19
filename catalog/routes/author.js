import { router } from '../../ghost/app/init.js'
import {
    author_create_get, 
    author_create_post, 
    author_delete_get, 
    author_delete_post, 
    author_detail, 
    author_update_get, 
    author_update_post
} from '../controllers/author.js'


router.get('/create', author_create_get)
router.post('/create', author_create_post)
router.get('/:id/delete', author_delete_get)
router.post('/:id/delete', author_delete_post)
router.get('/:id/update', author_update_get)
router.post('/:id/update', author_update_post)
router.get('/:id', author_detail)

export { router }