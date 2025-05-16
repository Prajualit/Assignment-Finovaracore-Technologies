import { Router } from "express";
import { aadhaarStatus } from "../controllers/aadhaar.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const aadhaarRouter = Router();

aadhaarRouter.route("/status").post(verifyJWT, aadhaarStatus);

export default aadhaarRouter;
