export declare const findUrlByShortCode: (short_code: string) => Promise<(import("mongoose").Document<unknown, {}, {
    is_active: boolean;
    user_id: import("mongoose").Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    is_active: boolean;
    user_id: import("mongoose").Types.ObjectId;
    original_url: string;
    short_code: string;
    password_protected: boolean;
    click_count: number;
    password_hash?: string | null;
    expires_at?: NativeDate | null;
    custom_alias?: string | null;
    domain_id?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const isUrlExpired: (expires_at?: Date | null | undefined) => boolean | null | undefined;
export declare const isUrlActive: (is_active: boolean) => boolean;
//# sourceMappingURL=url.service.d.ts.map