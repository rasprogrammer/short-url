import express from "express";
import { auth } from "../middlewares/auth.js";
// import { generateUrlShort, handleShortid } from "../controllers/urlController.js";

const router = express.Router();

router.use(auth);

// Get user urls
router.get('/', (req, res) => {
    return res.status(200).json({
        success: true, 
        message: "URL Dashboard"
    });
});

// create new url
router.post('/', (req, res) => {});

// Get single url
router.get('/:id', (req, res) => {});

// Update URL
router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

// Get URL Analytics
router.get('/:id/analytics', (req, res) => {});

// Click Logs
router.get('/:id/clicks', (req, res) => {});

export default router;