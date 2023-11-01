// const http = require('http');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended : false}));

app.get('/login',(req,res,next) => {
    res.send('<form action="/login" method="POST"><input type="text" name="user"><button type="submit">login</button></form>');
});

app.post('/login' , (req , res , next) => {

    const username = req.body.user;
    localStorage.setItem('username' , username);
    res.redirect('/'); 
})


app.get('/', (req, res, next) => {
  const username = localStorage.getItem('username');
  let fileContents = '';

  try {
    fileContents = fs.readFileSync('messages.txt', 'utf8');
  } catch (err) {
    console.error('Error reading the file:', err);
  }

  res.send(`
    <h1> ${username}:${fileContents}</h1>
    <form action="/post" method="POST">
      <input type="text" name="message" placeholder="Enter your message">
      <button type="submit">Post</button>
    </form>

  `);
    });


app.post('/post', (req, res, next) => {
    const message = req.body.message;

  fs.appendFile('messages.txt', message + '\n', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return res.status(500).send('Internal Server Error');
    }

    console.log('Message appended to the file');
    res.redirect('/');
  });
  });

app.use((req,res,next) => {
    res.status(404).send('<h1>page not found</h1>');
})

// const server = http.createServer(app);
// server.listen(5000);
app.listen(5000);
