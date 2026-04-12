import mongoose from "mongoose";
declare const ApiKey: mongoose.Model<{
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    is_active: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    api_key?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default ApiKey;
//# sourceMappingURL=apiKeyModel.d.ts.map