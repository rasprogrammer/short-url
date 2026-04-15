import type { Request } from "express";
export interface AuthRequest extends Request {
    auth?: {
        id: string;
        type: 'user' | 'api';
    };
}
//# sourceMappingURL=request-types.d.ts.map