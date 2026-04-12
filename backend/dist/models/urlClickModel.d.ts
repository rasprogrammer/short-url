import mongoose from "mongoose";
declare const UrlClick: mongoose.Model<{
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    ip_address?: string | null;
    user_agent?: string | null;
    referer?: string | null;
    device_type?: string | null;
    url_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default UrlClick;
//# sourceMappingURL=urlClickModel.d.ts.map