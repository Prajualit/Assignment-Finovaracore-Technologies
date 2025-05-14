import { Router } from "express";
import { aadhaarStatus } from "../controllers/aadhaar.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/aadhaar-status").post(verifyJWT, aadhaarStatus);

export default router;
