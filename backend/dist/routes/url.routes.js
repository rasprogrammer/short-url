import express from "express";
import { auth } from "../middlewares/auth.js";
import { createShortURL, deleteUrl, getAllUrls, getUrl, updateUrl } from "../controllers/url.controller.js";
// import { generateUrlShort, handleShortid } from "../controllers/urlController.js";
const router = express.Router();
router.use(auth);
// Get user urls
router.get('/', getAllUrls);
// create new url
router.post('/', createShortURL);
// Get single url
router.get('/:id', getUrl);
// Update URL
router.put('/:id', updateUrl);
router.delete('/:id', deleteUrl);
// Get URL Analytics
router.get('/:id/analytics', (req, res) => { });
// Click Logs
router.get('/:id/clicks', (req, res) => { });
export default router;
//# sourceMappingURL=url.routes.js.map