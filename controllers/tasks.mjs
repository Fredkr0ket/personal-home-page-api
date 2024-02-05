import getTasks from "../models/tasks.mjs";

class TasksClass {
    async allTasks(req, res) {
        getTasks("all").then((items) => {
            res.json(items) 
        });
    }
}
const Tasks = new TasksClass
export default Tasks
