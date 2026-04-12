import express from "express";
import { generateApikey, getAllApiKey, revokeApiKey } from "../controllers/api-key.controller.js";
import { auth } from "../middlewares/auth.js";
const router = express.Router();
router.use(auth);
router.get('/', getAllApiKey);
router.post('/', generateApikey);
router.delete('/:id', revokeApiKey);
export default router;
//# sourceMappingURL=api-key.routes.js.map