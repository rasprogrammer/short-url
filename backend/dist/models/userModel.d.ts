import mongoose from "mongoose";
declare const User: mongoose.Model<{
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    email: string;
    name: string;
    plan: "free" | "pro" | "enterprise";
    is_active: boolean;
    password_hash?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=userModel.d.ts.map