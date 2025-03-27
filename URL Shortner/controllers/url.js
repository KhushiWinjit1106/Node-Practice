const shortid = require("shortid");
const URL = require('../models/url');

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "body is required" });

    const shortID = shortid.generate(); // Ensure shortid is generated correctly

    await URL.create({
        ShortID: shortID, // Match the schema field name
        redirectURL: body.url,
        VisitHistory: [],
    });

    return res.json({ id: shortID });
}

module.exports = {
    handleGenerateShortURL,
};