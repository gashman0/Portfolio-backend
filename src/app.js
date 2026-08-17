import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRouter from "./routes/ContactRoute.js";
import hireRouter from "./routes/HireRoute.js";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URI,
  "https://gashman.dev",
  "https://www.gashman.dev",
].filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      // Requests from Postman and server-side clients may have no origin.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Portfolio API is running fine",
  });
});

app.use("/contacts", contactRouter);
app.use("/hire", hireRouter);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error.message?.includes("is not allowed by CORS")) {
    return res.status(403).json({
      success: false,
      message: "Origin is not allowed",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
});

export default app;