import z from "zod";


export const apiNameSchema = z
    .string()
    .trim()
    .nonempty();


export const GenerateApikeySchema = z.object({
    name: apiNameSchema
});