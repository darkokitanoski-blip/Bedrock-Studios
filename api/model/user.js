const mongoose = require("mongoose")

const DBschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
    password: {
    type: String,
    validate: {
        validator: function(value) {
        // Only require password if authProvider is 'local'
        if (this.authProvider === 'local') {
            return value && value.length > 0;
        }
        return true; // Discord/Google users don't need password
        },
        message: "Password is required for local users"
    }
    },
  discordId: { type: String, unique: true, sparse: true },
  googleId: { type: String, unique: true, sparse: true },
  authProvider: { 
    type: String, 
    enum: ['local', 'discord', 'google'], 
    required: true 
  }
});

const UserSaved = mongoose.model("Users", DBschema)
module.exports = UserSaved