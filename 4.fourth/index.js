const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Connect to MongoDB
mongoose
  .connect(
    'mongodb://quesUser:1@mongo:27017/ques',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const User = require('./models/user');

app.post('/user', (req, res) => {
  const newUser = new User();
  console.log(req.body);
  newUser.userId = req.body.userId;
  newUser.password = req.body.password;
  newUser.name = req.body.name;
  newUser.age = req.body.age;

  newUser.save( (err) => {
         if(err){
             console.error(err);
             res.json({result: 0});
             return;
        }
        res.json({result: 1});
   });
});


app.get('/user', (req, res) => {
  User.find( (err, personalInfo) => {
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(personalInfo);
  })
});


const port = 3000;

app.listen(port, () => console.log('Server running...'));
