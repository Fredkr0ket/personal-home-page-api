import Tasks from "../controllers/tasks.mjs";
import { Router } from "express";

const router = Router();
router.get("/", Tasks.allTasks);
router.post("/update/:id/finished/:data", Tasks.updateFinishedStatus);
router.delete("/delete/:id", Tasks.deleteItem)

export default router;