const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeController");


router.get("/", controller.getHome);

module.exports = router;