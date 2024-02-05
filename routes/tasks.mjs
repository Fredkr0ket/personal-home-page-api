import Tasks from "../controllers/tasks.mjs";
import { Router } from "express";

const router = Router();
router.get("/", Tasks.allTasks);

export default router;