import express from 'express';
import morgan from 'morgan';

import config from './config/config';
// controllers
import home from './controllers/home';
import email from './controllers/email';

const app = express();
const PORT = config.port;

app.use(morgan('dev'));

app.get('/', home);
app.post('/email', email);

// start express server
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
})

export default app;