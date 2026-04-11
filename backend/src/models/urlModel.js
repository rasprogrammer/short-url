// 
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true
        },
        originalUrl: {
            type: String,
            required: true,
        },
        visitHistory: [
            {
                timestamps: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const Url = mongoose.model('url', urlSchema);

module.exports = Url;