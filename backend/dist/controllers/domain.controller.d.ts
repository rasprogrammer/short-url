import type { Response } from "express";
import type { AuthRequest } from "../utils/request-types.js";
export declare const addDomain: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const verifyDomain: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllDomain: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteDomain: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=domain.controller.d.ts.map