let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
require('dotenv').config()
// Express Route
const postRoute = require('./routes/post.route')
const loginRoute = require('./routes/login.route')
const profRoute = require('./routes/profile.route')
const path = require('path')
const app = express();

mongoose
  .connect(process.env.MONGODB_URI||'mongodb+srv://test:test@cluster0.nfmkma3.mongodb.net/?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

app.use(bodyParser.json());


app.use(cors());
app.use('/logins', loginRoute);
app.use('/profiles', profRoute);
app.use('/posts', postRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});