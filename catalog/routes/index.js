import express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('catalog/index', { title: 'Express' });
});

export{ router }
