const mongoose = require("mongoose")

// ett databas schema som används för att berätta till MongoDB (NoSQL databas) vad vi vill spara
const DBschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
  }
});

const UserSaved = mongoose.model("Users", DBschema)
module.exports = UserSaved