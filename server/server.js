const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const config = require('./config');

const isDev = process.argv.some((val, index) => index >= 2 && val === 'dev');

const port = !isDev && process.env.PORT ? process.env.PORT : config.portDev;
const proxyHost = !isDev ? config.apiHost : config.apiHostDev;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', proxy(proxyHost));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => console.log(`Express web-server is started on port ${port}!`));
