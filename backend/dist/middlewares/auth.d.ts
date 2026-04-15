import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../utils/request-types.js";
export declare const auth: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.d.ts.map