const Event = require("../models/event");
const { listByEventId } = require("./participant");

exports.listAll = async (req, res) => {
  let events = await Event.find({});

  const data = await Promise.all(
    events.map(async (item) => {
      const participants = await listByEventId(item._id);

      return {
        ...item._doc,
        participants,
      };
    })
  );

  res.send(data);
};

exports.getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  const participants = await listByEventId(req.params.id);

  res.send({ ...event._doc, participants });
};

exports.insertEvent = async (req, res) => {
  const body = {
    ...req.body,
    date: new Date(req.body.date),
    createDate: new Date(),
    updateDate: new Date(),
    isActive: true,
  };
  const event = new Event(body);

  await event.save();

  res.json(body);
};

exports.updateEvent = async (req, res) => {
  const body = {
    ...req.body,
    date: new Date(req.body.date),
    updateDate: new Date(),
  };

  await Event.findByIdAndUpdate(req.params.id, { $set: body });

  res.json(body);
};

exports.deleteEvent = async (req, res) => {
  await Event.findByIdAndRemove(req.params.id);

  res.json({ message: "Evento deletado com sucesso." });
};
