import type { Response } from "express";
import type { AuthRequest } from "../utils/request-types.js";
export declare const generateApikey: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllApiKey: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const revokeApiKey: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=api-key.controller.d.ts.map