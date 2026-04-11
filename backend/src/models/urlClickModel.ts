/*

id - auto increment, primary key

url_id - 
ip_address - 
user_agent - 

referer - 
country - 
device_type - 

clicked_at - 

index(url_id, clicked_at)

*/

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const urlClickSchema = new Schema({
    url_id: {
        type: Schema.Types.ObjectId,
        ref: 'Url'
    }, 
    ip_address: String,
    user_agent: String,
    referer: String,
    device_type: String,
}, {
    timestamps: true,
});

const UrlClick = model('UrlClick', urlClickSchema);

export default UrlClick;