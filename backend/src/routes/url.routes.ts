import express from "express";
import { generateUrlShort, handleShortid } from "../controllers/urlController.js";

const router = express.Router();


router.post('/', generateUrlShort);

router.get('/:shortId', handleShortid);

export default router;