import express from "express";
import { getOriginalUrl } from "../controllers/redirect.controller.js";
const router = express.Router();
router.get('/:short_code', getOriginalUrl);
export default router;
//# sourceMappingURL=redirect.routes.js.map