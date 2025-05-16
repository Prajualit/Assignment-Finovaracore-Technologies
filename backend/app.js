import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ 
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
import userRouter from "./routes/auth.route.js";
import aadhaarRouter from "./routes/aadhaar.route.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/aadhaar", aadhaarRouter);


export { app };