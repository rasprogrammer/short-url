import z from "zod";
export declare const domainNameSchema: z.ZodString;
export declare const AddDomainSchema: z.ZodObject<{
    domain_name: z.ZodString;
}, z.z.core.$strip>;
export declare const VerifyDomainSchema: z.ZodObject<{
    domain_name: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=domain.d.ts.map