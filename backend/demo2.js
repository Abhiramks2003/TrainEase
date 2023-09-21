const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "abhiram@psql2023",
    database: "postgres"
})

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL:', err);
    });

let query = "select * from ticket;"
client.query(query).then((result) => {
    const rows = result.rows;
    const jsonRow = JSON.stringify(rows)
    console.log(JSON.parse(jsonRow));
}).catch((err) => {
    console.error('Error executing query:', err);
});



// client.connect().then(async () => {
//
//     const result = await client.query(query);
//     console.log(result.rows);
// })

