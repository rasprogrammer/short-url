import { z } from "zod";
export const nameSchema = z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .min(2, { message: "Name must be atleast 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" });
export const emailSchema = z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" });
export const passwordSchema = z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters" })
    .max(64, { message: "Password cannot exceed 64 characters" })
    .regex(/[A-Z]/, { message: "Password must be include atleast one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must be include atleast one lowercase letter" })
    .regex(/\d/, { message: "Password must be include atleast one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must be include atleast one special character" });
export const CreateUserSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema
});
export const UserLoginSchema = z.object({
    email: emailSchema,
    password: z.string()
        .trim()
        .nonempty({ message: "Password is required" })
        .min(6, { message: "Password must be atleast 6 characters" })
});
//# sourceMappingURL=auth.js.map