import { router } from '../../ghost/app/init.js'
import {
    genre_create_get, 
    genre_create_post,
    genre_delete_get,
    genre_delete_post,
    genre_detail,
    genre_update_get,
    genre_update_post
} from '../controllers/genre.js'

router.get('/create', genre_create_get)
router.post('/create', genre_create_post)
router.get('/:id', genre_detail)
router.get('/:id/delete', genre_delete_get)
router.post('/:id/delete', genre_delete_post)
router.get('/:id/update', genre_update_get)
router.post('/:id/update', genre_update_post)

export { router }

