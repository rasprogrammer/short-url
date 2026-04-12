import type { Request, Response } from "express";
export declare const generateApikey: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const revokeApiKey: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=api-key.controller.d.ts.map