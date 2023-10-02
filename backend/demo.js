const { Client } = require("pg");
const fs = require('fs');

const sqlFilePath = 'railease.sql';
const client = new Client("postgresql://abhiram:531FlKhMOCsXedTOQUHhDw@train-01-6236.8nk.cockroachlabs.cloud:26257/trainbooking?sslmode=verify-full");
// let Query=`CREATE TABLE USERS(
//     userid varchar(10),
//     name varchar(30),
//     DOB date,
//     email varchar(20),
//     password varchar(20)
// )`;
(async () => {
    try {
        await client.connect();
        const sqlFile = fs.readFileSync(sqlFilePath, 'utf-8');
        const sqlStatements = sqlFile.split(';');

        // Iterate through each statement and execute it
        // for (const sqlStatement of sqlStatements) {
        //     if (sqlStatement.trim() !== '') {
        //         const result = await client.query(sqlStatement);
        //         console.log(result.rows);
        //     }
        // }
        const result = await client.query(sqlFile);
        console.log(result.rows);
        console.log("Success");
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        client.end();
    }
})();