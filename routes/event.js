const express = require("express");
const router = express.Router();

const {
  listAll,
  getEvent,
  insertEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event");

router.get("/list-all", listAll);
router.get("/:id/get-event", getEvent);
router.post("/insert-event", insertEvent);
router.put("/:id/update-event", updateEvent);
router.delete("/:id/delete-event", deleteEvent);

module.exports = router;
