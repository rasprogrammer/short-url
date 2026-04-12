import mongoose from "mongoose";
declare const Domain: mongoose.Model<{
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    is_verified: boolean;
    user_id?: mongoose.Types.ObjectId | null;
    domain_name?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Domain;
//# sourceMappingURL=domainModel.d.ts.map