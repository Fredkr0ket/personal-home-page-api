import mysql from "mysql"

export default function(item) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "RootRoot",
        database: "personal-home-page"
    })
    return new Promise((resolve, reject) => {
        switch (item) {
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
                resolve([]);
        }
        connection.end(); // Close the connection after the query
    });
}


