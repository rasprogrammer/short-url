import express from "express";
import { addDomain, deleteDomain, getAllDomain, verifyDomain } from "../controllers/domain.controller.js";
import { auth } from "../middlewares/auth.js";
const router = express.Router();
router.use(auth);
// Add Domain
router.post('/', addDomain);
// Verify Domain 
router.post('/:id/verify', verifyDomain);
// Get Domains
router.get('/', getAllDomain);
// Delete Domain
router.delete('/:id', deleteDomain);
export default router;
//# sourceMappingURL=domain.routes.js.map