import sqlite3 from "sqlite3";

const SQLITE3 = sqlite3.verbose();

function query(command, params, method = "all") {
    return new Promise((resolve, reject) => {
        db[method](command, params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

const db = new SQLITE3.Database("database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(`Erro ao conectar com o banco: ${err.message}`);
    }
});

export { db, query };
