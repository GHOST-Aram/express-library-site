import { render } from "../ghost/utils/http-response.js";

export const index = (req, res) =>{
    render(res,'catalog/index', { title: 'Express' });
}

