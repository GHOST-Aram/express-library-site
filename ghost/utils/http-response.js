import { createError } from "../app/init.js";


export const render = (res,template, context) =>{
    res.render(template, context);
}

export const redirect = (res, url) =>{
    res.redirect(url)
}
export const  create404Error = () =>{
    return createError(404)
}
