const mongoose = require("mongoose");

const ClientShcema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientShcema);
