const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

// get homepage
router.get("/", messageController.index);

// get new message form
router.get("/new", messageController.newMessageForm);

// add a new message
router.post("/new", messageController.handleNewMessage);

// get individual message
router.get("/:id", messageController.viewIndividualMessage);

module.exports = router;
