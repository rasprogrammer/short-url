import type { Request } from "express";
export interface AuthRequest extends Request {
    auth?: {
        id: string;
    };
}
//# sourceMappingURL=request-types.d.ts.map