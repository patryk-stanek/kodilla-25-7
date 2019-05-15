import express from 'express';
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'pug');
app.set('views', './views');

app.use((req, res, next) => {
    next();
});