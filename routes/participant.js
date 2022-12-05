const express = require("express");
const router = express.Router();

const {
  getParticipant,
  insertParticipant,
  updateParticipant,
  deleteParticipant,
} = require("../controllers/participant");

router.get("/:id/get-participant", getParticipant);
router.post("/:eventId/insert-participant", insertParticipant);
router.put("/:id/update-participant", updateParticipant);
router.delete("/:id/delete-participant", deleteParticipant);

module.exports = router;
