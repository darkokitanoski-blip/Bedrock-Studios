const express = require("express");
const { route } = require("./routes");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const router = express.Router();

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router