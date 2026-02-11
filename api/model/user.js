const mongoose = require("mongoose")

const DBschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
  }
});

const UserSaved = mongoose.model("Users", DBschema)
module.exports = UserSaved