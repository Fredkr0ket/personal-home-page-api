import Tasks from "../controllers/tasks.mjs";
import { Router } from "express";

const router = Router();
router.get("/", Tasks.allTasks);
router.put("/update/:id/finished/:data", Tasks.updateFinishedStatus);
router.post("/create", Tasks.createItem);
router.delete("/delete/:id", Tasks.deleteItem);

export default router;