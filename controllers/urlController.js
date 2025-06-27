const Url = require("./../models/urlModel");
const shortid = require("shortid");

async function generateUrlShort(req, res) {
    if (!req.body.url) {
        return res.status(400).json({ error: "Please input url" });
    }
    await Url.create({
        shortId: shortid.generate(),
        originalUrl: req.body.url
    });

    return res.status(200).json({ message: "success" });
}

async function handleShortid(req, res) {
    const shortId = req.params.shortId;
    if (!req.params.shortId) {
        return res.status(500).json("Short Id is required");
    }
    const result = await Url.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        }
    );

    res.redirect(result.originalUrl);
}

module.exports = {
    generateUrlShort,
    handleShortid
};