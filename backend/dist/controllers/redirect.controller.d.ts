import type { Request, Response } from "express";
export declare const getOriginalUrl: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const verifyPasswordRequest: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const handleRedirect: (req: Request, url: any) => Promise<void>;
export declare const getPasswordHTML: (short_code: string) => string;
//# sourceMappingURL=redirect.controller.d.ts.map