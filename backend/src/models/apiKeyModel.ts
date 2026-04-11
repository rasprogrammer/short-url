/*

id - auto increment, primary key 

user_id - 
api_key - 

is_active - 
created_at - 

*/

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const apiKeySchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    api_key: {
        type: String, 
        unique: true,
    },
    is_active: {
        type: Boolean, 
        default: true,
    }
}, {
    timestamps: true,
});

const ApiKey = model('ApiKey', apiKeySchema);

export default ApiKey;