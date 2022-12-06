const Participant = require("../models/participant");
const ObjectId = require("mongoose").Types.ObjectId;

exports.listByEventId = async (eventId) => {
  const data = await Participant.find({
    event_id: ObjectId(eventId),
  });

  return data;
};

exports.getParticipant = async (req, res) => {
  try {
    await Participant.findById(req.params.id);

    res.send(participant);
  } catch (err) {
    next(err);
  }
};

exports.insertParticipant = async (req, res) => {
  const body = {
    ...req.body,
    createDate: new Date(),
    updateDate: new Date(),
    isActive: true,
    isPaid: false,
    event_id: new ObjectId(req.params.eventId),
  };
  const participant = new Participant(body);

  await participant.save();

  res.json(body);
};

exports.updateParticipant = async (req, res) => {
  const body = { ...req.body, updateDate: new Date() };

  await Participant.findByIdAndUpdate(req.params.participantId, { $set: body });

  res.json(body);
};

exports.deleteParticipant = async (req, res) => {
  await Participant.findByIdAndRemove(req.params.id);

  res.json({ message: "Participanto deletado com sucesso." });
};
