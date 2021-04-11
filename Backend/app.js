const express = require('express');
const MobileData = require('./src/model/Mobiledata');
const LoginData = require('./src/model/Logindata');
const cors = require('cors');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
var username = 'admin';
var password = '12345';


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

app.post('/insert', verifyToken, function (req, res) {
// app.post('/insert', function (req, res) {

  console.log(req.body);

  var mobile = {
    Name: req.body.mobile.Name,
    Model: req.body.mobile.Model,
    Storage: req.body.mobile.Storage,
    Version: req.body.mobile.Version,
    Review: req.body.mobile.Review,
    CPU: req.body.mobile.CPU,
    Price: req.body.mobile.Price,
    imageUrl: req.body.mobile.imageUrl,
  }
  var mobile = new MobileData(mobile);
  mobile.save();
});
app.get('/mobiles', function (req, res) {

  MobileData.find()
    .then(function (mobiles) {
      res.send(mobiles);
    });
});
app.get('/:id', (req, res) => {

  const id = req.params.id;
  MobileData.findOne({ "_id": id })
    .then((mobile) => {
      res.send(mobile);
    });
});

app.post('/register', (req, res) => {
  var temp = req.body.user;
  delete temp._id;
  console.log(temp)
  var user = LoginData(temp);
  user.save();
  res.send({ "message": "success" });
});

app.post('/login', (req, res) => {
  let userData = req.body


  /*if (!username) {
    res.status(401).send('Invalid Username')
  } else
    if (password !== userData.password) {
      res.status(401).send('Invalid Password')
    } else {
      let payload = { subject: username + password }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token })
    }*/
  LoginData.find({ email: req.body.uname }).then(data => {
    if (data[0]) {
      if (data[0].password == req.body.password) {
        console.log("login success")
        let payload = { subject: req.body.uname + req.body.password }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token })
        // res.send("success")
      }
    }
  })

})

app.put('/update', (req, res) => {
  console.log(req.body)
  Name = req.body._Name,
    Name = req.body.Name,
    Model = req.body.Model,
    Storage = req.body.Storage,
    Version = req.body.Version,
    Review = req.body.Review,
    CPU = req.body.CPU,
    Price = req.body.Price,
    imageUrl = req.body.imageUrl
  MobileData.findByIdAndUpdate({ "_id": req.body._id },
    {
      $set: {
        "Name": Name,
        "Model": Model,
        "Storage": Storage,
        "Version": Version,
        "Review": Review,
        "CPU": CPU,
        "Price": Price,
        "imageUrl": imageUrl
      }
    })
    .then(function () {
      res.send({ "message": "success" });
    })
})

app.delete('/remove/:id', (req, res) => {

  id = req.params.id;
  EmployeeData.findByIdAndDelete({ "_Name": Name })
    .then(() => {
      console.log('success')
      res.send();
    })
})


app.listen(3000, function () {
  console.log('listening to port 3000');
});

