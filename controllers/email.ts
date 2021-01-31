import express from 'express'

const router = express.Router();

router.post('/email', (req, res) => {
  console.log('email post called');
  res.status(200).json("sent");
});


export default router;