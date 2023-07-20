import { asyncHandler } from "../../ghost/app/init.js"


export const genre_list = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre List')
})

export const genre_detail = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre detail:', req.params.id)
})

export const genre_create_get = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre Ceate GET')
})

export const genre_create_post = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre create POST')
})

export const genre_delete_get = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre delete GET')
})

export const genre_delete_post = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre Delete POST')
})

export const genre_update_get = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre Update GET')
})

export const genre_update_post = asyncHandler( async(req, res, next) =>{
    res.send('NOT IMPELEMENTED: Genre update POST')
})