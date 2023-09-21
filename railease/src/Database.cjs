const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "abhiram@psql2023",
    database: "postgres"
})

client.connect();

client.query(`Select * from Train`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else
        console.log(err.message);
    client.end();
})