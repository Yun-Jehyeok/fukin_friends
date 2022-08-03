const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(morgan('dev'));
app.use(express.json());

const { MONGO_URI, PORT } = config;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb connecting success');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/comment', require('./routes/api/comment'));
app.use('/api/search', require('./routes/api/search'));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
