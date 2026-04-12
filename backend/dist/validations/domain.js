import z from "zod";
export const domainNameSchema = z
    .string()
    .trim()
    .nonempty();
export const AddDomainSchema = z.object({
    domain_name: domainNameSchema
});
export const VerifyDomainSchema = z.object({
    domain_name: domainNameSchema
});
//# sourceMappingURL=domain.js.map