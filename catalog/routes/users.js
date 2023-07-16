import { router } from "../../ghost/app/init.js";


router.get('/', (req, res) =>{
  res.send('respond with a resource');
});

router.get('/cool', (req, res) =>{
  res.render('catalog/index', { heading: 'You are so cool' })
})

export {router}
