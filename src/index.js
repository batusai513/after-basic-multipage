import express from 'express';

let root = require('./home/server').default;
let about = require('./about/server').default;
// let server = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
console.log(process.env.NODE_ENV)
process.env.NODE_ENV === 'development'
  ? app.use('/static', express.static(process.env.RAZZLE_PUBLIC_DIR))
  : app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use(root);
app.use(about);

export default app.listen(port, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`> Started on port ${port}`);
});
