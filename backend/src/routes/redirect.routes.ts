import express from "express";
import { getOriginalUrl, verifyPasswordRequest } from "../controllers/redirect.controller.js";

const router = express.Router();

router.get('/:short_code', getOriginalUrl);

router.post('/verify-password', verifyPasswordRequest);

export default router; 