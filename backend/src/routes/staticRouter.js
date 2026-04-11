const express = require("express");
const router = express.Router();

const Url = require("./../models/urlModel");

router.get("/", async (req, res) => {
    const urls = await Url.find({}).sort({ createdAt: 'desc' });
    return res.render("homepage", { urls: urls })
})

module.exports = router;