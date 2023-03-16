import express from "express";
import router from './routes/router.js';
import path from 'path'

const app = express();
app.use(express.json());

app.use(express.static(path.join(path.resolve(), "..", "client", "dist")));

app.use('/api', router);

app.use(express.static('dist/client'));

app.get('*', (_req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/client/index.html'));
});

export default app
