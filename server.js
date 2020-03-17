const Koa = require('koa');
const next = require('next');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const Router = require('koa-router');
const db = require('./config/key').mongoURI;
const route = require('./src/server/ProductPageTab')
mongoose.connect(db)
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));
let router = Router();
const app = new Koa

router.post("/editShareTab", route.editShareTab)
app.listen(5000, () => console.log('abcv'))