import express from 'express'

const router = express.Router();

router.get('/', (req, res) =>{
  res.send('respond with a resource');
});

router.get('/cool', (req, res) =>{
  res.render('catalog/index', { heading: 'You are so cool' })
})

export {router}
