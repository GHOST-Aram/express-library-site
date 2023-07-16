import { router } from "../../ghost/app/init.js";

/* GET home page. */
router.get('/', (req, res) =>{
  res.render('catalog/index', { title: 'Express' });
});

export{ router }
