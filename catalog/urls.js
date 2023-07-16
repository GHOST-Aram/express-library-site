import { router } from "../ghost/app/init.js";
import { index } from "./views.js";
import { config } from '../ghost/app/config.js';

config()
router.get('/', index);
  
export{ router }
