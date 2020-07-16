import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

const router = express.Router();
router.get('/about', async (req, res) => {
  try {
    const html = await render({
      req,
      res,
      routes,
      assets,
      chunks,
      name: 'about',
    });
    res.send(html);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message, stack: error.stack });
  }
});

export default router;
