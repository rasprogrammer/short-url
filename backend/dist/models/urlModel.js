/*
    id - auto increment , primary key
    user_id
    original_url
    short_code
    custom_alias
    domain_id
    is_active
    expires_at
    password_protected
    password_hash

    click_count

    created_at
    updated_at

    // index(short_code, custom_alias, user_id)

*/
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const urlSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    original_url: {
        type: String,
        required: true,
    },
    short_code: {
        type: String,
        required: true,
        unique: true,
    },
    custom_alias: {
        type: String,
        unique: true,
    },
    domain_id: {
        type: Schema.Types.ObjectId,
        ref: 'Domain'
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    expires_at: Date,
    password_protected: {
        type: Boolean,
        default: false,
    },
    password_hash: String,
    click_count: {
        type: Int32Array,
        default: 0,
    }
}, {
    timestamps: true,
});
const Url = model('Url', urlSchema);
export default Url;
//# sourceMappingURL=urlModel.js.map