import { asyncHandler } from "../../ghost/app/init.js"
import { Book } from '../models/book.js'
import { Author } from '../models/author.js'
import { BookInstance } from '../models/book-instance.js'
import { Genre } from '../models/genre.js'
import { render } from "../../ghost/utils/http-response.js"


export const index = asyncHandler(async (req, res, next) =>{
    const [
        numBooks, numBookInstances, numAvailableBooks,
        numAuthors, numGenres
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: 'Availabe'}).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec()
    ])

    const context = {
        title: 'Local Library Home',
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available: numAvailableBooks,
        author_count: numAuthors,
        genre_count: numGenres,
    }

    render( res, 'catalog/index', context)
})

export const book_list = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book list')
    res.end()
})

export const book_detail = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book deatil: ')
})

export const book_create_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book Create GET')
})

export const book_create_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book Create POST')
})

export const book_delete_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book delete GET')
})

export const book_delete_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book Delete POST')
})

export const book_update_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book update GET')
})

export const book_update_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book Update POST')
})