const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api//tweets');
const User = require('./models/User');


mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  const user = new User({
    handle: 'mrkchoi',
    email: 'kennethichoi@gmail.com',
    password: 'password'
  })
  user.save();
  res.send("Hello World updated");
});
app.use('/api/users', users);
app.use('/api/tweets', tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

