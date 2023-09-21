const { Client } = require("pg");

const client = new Client("postgresql://abhiram:531FlKhMOCsXedTOQUHhDw@train-01-6236.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
    await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log(results.rows);
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        client.end();
    }
})();