export const index = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Site Home Page')
})

export const book_list = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book list')
})

export const book_detail = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Book deatil: ', req.params.id)
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