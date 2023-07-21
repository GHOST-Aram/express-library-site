import { asyncHandler } from "../../ghost/app/init.js"



export const author_list = asyncHandler(async (req, res, next)=>{
    res.send('NOT IMPLEMENTED: Author List')
})

export const author_detail = asyncHandler(async (req, res, next) =>{
    console.log('AUTHORS')
    res.send('NOT IMPLEMENTED: Author detail: ', req.params.id)
})

export const author_create_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author Create GET')
})

export const author_create_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author Create POST')
})

export const author_delete_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author delete GET')
})

export const author_delete_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author delete POST')
})


export const author_update_get = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author Update GET')
})

export const author_update_post = asyncHandler(async (req, res, next) =>{
    res.send('NOT IMPLEMENTED: Author update POST')
})

