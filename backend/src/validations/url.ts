import z from "zod";

export const originalUrlSchema = z
    .string()
    .trim()
    .nonempty({ message: "Original URL is required" });

export const customAliasSchema = z
    .string()
    .trim()
    .optional();

export const expiresAtSchema = z
    .string()
    .trim()
    .optional();

export const passwordSchema = z
    .string()
    .trim()
    .optional();

export const CreateShortURLSchema = z.object({
    original_url: originalUrlSchema,
    custom_alias: customAliasSchema,
    expires_at: expiresAtSchema,
    password: passwordSchema
});

export const UpdateShortURLSchema = z.object({
    original_url: originalUrlSchema,
    custom_alias: customAliasSchema,
    expires_at: expiresAtSchema,
    password: passwordSchema
})