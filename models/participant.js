const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  name: { type: String },
  isPaid: { type: Boolean },
  createDate: { type: Date },
  updateDate: { type: Date },
  isActive: { type: Boolean },
  event_id: { type: mongoose.ObjectId },
});

module.exports = mongoose.model("Participant", ParticipantSchema);
