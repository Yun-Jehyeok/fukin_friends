const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/index");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());

const { MONGO_URI, PORT } = config;

let mongo_url = "";
let port = "";

if (process.env.NODE_ENV === "production") {
  mongo_url = process.env.MONGO_URI;
  port = process.env.PORT;
} else {
  port = PORT;
  mongo_url = MONGO_URI;
}

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connecting success");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/feed", require("./routes/api/feed"));
app.use("/api/event", require("./routes/api/event"));
app.use("/api/notice", require("./routes/api/notice"));
app.use("/api/comment", require("./routes/api/comment"));

app.listen(port, () => {
  console.log(`Server started on ${PORT} port`);
});
