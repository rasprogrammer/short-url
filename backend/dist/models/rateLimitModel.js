/*

id - auto increment, primary key

identifier - // IP or userId
request_count -

window_start

index (identifier)

*/
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const rateLimitSchema = new Schema({
    identifier: String,
    request_count: {
        type: Int32Array,
        default: 0,
    },
    window_start: Date
});
const RateLimit = model('RateLimit', rateLimitSchema);
export default RateLimit;
//# sourceMappingURL=rateLimitModel.js.map