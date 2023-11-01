// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next) => {
    // console.log("in the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">add product</button></form>');
});

app.post('/product',(req,res,next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    // console.log("in the next middleware");
    res.send('<h1>hello</h1>');
})

// const server = http.createServer(app);
// server.listen(5000);
app.listen(5000);
