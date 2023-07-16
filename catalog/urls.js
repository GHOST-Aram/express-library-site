import { router } from "../ghost/app/init.js";
import { index } from "./views.js";

router.get('/', index);
  
export{ router }
