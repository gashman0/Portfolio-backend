import { Router } from "express";
import createHire from "../controllers/hireController.js";

const hireRouter = Router();

hireRouter.post("/", createHire);

export default hireRouter;