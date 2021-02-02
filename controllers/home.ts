import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(process.env.PORT);
  res.send('Hello Express + Typescript');
});

export default router;