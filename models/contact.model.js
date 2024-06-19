const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("contacts", contactSchema);
