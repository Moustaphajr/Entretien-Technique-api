const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
