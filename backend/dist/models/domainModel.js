/*

id - auto increment, primary key
user_id -

domain_name -
is_verified -

created_at -


*/
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const domainSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    domain_name: {
        type: String,
        unique: true,
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const Domain = model('Domain', domainSchema);
export default Domain;
//# sourceMappingURL=domainModel.js.map