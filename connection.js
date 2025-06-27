const mongoose = require("mongoose");

async function mongoDbConnect(dbURL) {
    mongoose.connect(dbURL)
        .then(() => console.log('mongoDB Connected!'))
        .catch((err) => console.log('Error', err));
}

module.exports = mongoDbConnect;