import z from "zod";
export declare const originalUrlSchema: z.ZodString;
export declare const customAliasSchema: z.ZodOptional<z.ZodString>;
export declare const expiresAtSchema: z.ZodOptional<z.ZodString>;
export declare const passwordSchema: z.ZodOptional<z.ZodString>;
export declare const CreateShortURLSchema: z.ZodObject<{
    original_url: z.ZodString;
    custom_alias: z.ZodOptional<z.ZodString>;
    expires_at: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const UpdateShortURLSchema: z.ZodObject<{
    original_url: z.ZodString;
    custom_alias: z.ZodOptional<z.ZodString>;
    expires_at: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=url.d.ts.map