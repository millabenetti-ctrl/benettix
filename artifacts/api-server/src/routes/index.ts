import { Router, type IRouter } from "express";
import { healthHandler } from "./health";

const router: IRouter = Router();

router.get("/healthz", healthHandler);

export default router;
