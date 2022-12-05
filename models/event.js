const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String },
  date: { type: Date },
  createDate: { type: Date },
  updateDate: { type: Date },
  isActive: { type: Boolean },
  totalPrice: { type: Number },
});

module.exports = mongoose.model("Event", EventSchema);
