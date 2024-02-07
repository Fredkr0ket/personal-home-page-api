import mysql from "mysql";

const getItems = (data, connection) => {
    return new Promise((resolve, reject) => {
        switch (data.value) {
            case "all":
                connection.query("SELECT * FROM tasks", (error, results, fields) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
                break;
            default:
                break;
        }
    });
};

const updateItems = (data, connection) => {
    return new Promise((resolve, reject) => {
        switch (data.value) {
            case "finished":
                connection.query("UPDATE tasks SET finished = ? WHERE id = ?", [data.data, data.id], (error, results, fields) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
                break;
            default:
                break;
        }
    });
};

const deleteItem = (data, connection) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM tasks WHERE id = ?", [data.id], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        })
    });
};


export default async function (req) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "RootRoot",
        database: "personal-home-page",
    });

    try {
        switch (req.action) {
            case "get":
                const getResult = await getItems(req.data, connection);
                return getResult;
            case "update":
                const updateResult = await updateItems(req.data, connection);
                return updateResult;
            case "delete":
                const deleteResult = await deleteItem(req.data, connection)
                return deleteResult;
            default:
                return [];
        }
    } catch (error) {
        throw error;
    } finally {
        connection.end(); // Close the connection after the query
    }
}