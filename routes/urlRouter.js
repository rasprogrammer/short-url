const express = require("express");
const router = express.Router();

const urlController = require("./../controllers/urlController");

router.post('/', urlController.generateUrlShort);

router.get('/:shortId', urlController.handleShortid);

module.exports = router;