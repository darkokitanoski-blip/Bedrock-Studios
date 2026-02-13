const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require('nodemailer');

const app = express();
require("dotenv").config()
app.use(express.json());

const corsOptions = {
  origin: 'https://bedrock-studios-u28l.vercel.app/', 
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type']
};

app.use(cors(corsOptions));

const connect = async() => {
  try {
    await mongoose.connect( process.env.MONGO_DB_URI )
    console.log("connected")
  } catch (err) {
    console.log(err)
  }

}
connect()

app.use("/api", require("./Router/routes"))
app.use("/auth", require("./Router/auth"));

const PORT = 10000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;