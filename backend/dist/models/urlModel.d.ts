import mongoose from "mongoose";
declare const Url: mongoose.Model<{
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    is_active: boolean;
    user_id: mongoose.Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Url;
//# sourceMappingURL=urlModel.d.ts.map