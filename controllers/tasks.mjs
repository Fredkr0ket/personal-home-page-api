import getTasks from "../models/tasks.mjs";

class TasksClass {
    async allTasks(req, res) {
        const dbReqBody = {
            action:"get",
            data: {
                value:"all"
            }
        }
        getTasks(dbReqBody).then((result) => {
            res.json(result)
        });
    }
    async createItem(req, res) {
        
    }
    async updateFinishedStatus(req, res) {
        const requestParams = req.params
        const dbReqBody = {
            action:"update",
            data: {
                value: "finished",
                id: requestParams.id,
                data: requestParams.data
            }
        }
        getTasks(dbReqBody).then((result) => {
            res.json(result)
        })
    }
    async deleteItem(req, res) {
        const requestParams = req.params
        const dbReqBody = {
            action:"delete",
            data: {
                id: requestParams.id
            }
        }
        getTasks(dbReqBody).then((result) => {
            res.json(result)
        })
    }
}
const Tasks = new TasksClass
export default Tasks
