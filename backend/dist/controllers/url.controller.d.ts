import type { Response } from "express";
import type { AuthRequest } from "../utils/request-types.js";
export declare const createShortURL: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllUrls: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUrl: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateUrl: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteUrl: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUrlAnalytics: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getClickLogs: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=url.controller.d.ts.map