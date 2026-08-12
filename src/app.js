import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { success } from "zod";


const app = express();

app.use(helmet());

app.use(
    cors({
        origin: process.env.FRONTEND_URI,
    }),
);

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: "draft-8",
        legacyHeaders: false,
    }),
);

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio API is running fine",
    });
});

export default app;