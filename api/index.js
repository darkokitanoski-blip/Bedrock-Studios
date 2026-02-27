const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require('nodemailer');

const app = express();
// jag ger tillstånd till min .env fil 
require("dotenv").config()
app.use(express.json());

// cors används här så att min frontend har tillstånd till backenden, Cors begreänssar tillstånden för att den funkar som en säkerhets system, så här jag bara säger att det är okej att tillåta requests från min domän(front ends)
const corsOptions = {
  origin: 'https://bedrock-studios-u28l.vercel.app', 
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type']
};

app.use(cors(corsOptions));

// kopplas till min databas
const connect = async() => {
  try {
    await mongoose.connect( process.env.MONGO_DB_URI )
    console.log("connected")
  } catch (err) {
    console.log(err)
  }

}
connect()
// endpoints rutter som navigerar
app.use("/api", require("./Router/routes"))
app.use("/auth", require("./Router/auth"));

// servern lyssnar här för när man jobbar på localhost
const PORT = 10000;

// grund av jag använder Render som min deploment för backend den vill att jag ska ha 0.0.0.0 som en port också
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;