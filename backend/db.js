const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "abhiram@psql2023",
    database: "postgres"
})

// const client = new Client("postgres://abhiram:8DEr9Vy2ZSq7qu6vDqHZbiw7bKGEdRk7@dpg-ck99iff0vg2c7399rbj0-a.oregon-postgres.render.com/railease?sslmode=verify-full")

async function connect() {
    await client.connect();
    console.log('Connected to PostgreSQL database');
}

async function disconnect() {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
}

async function executeQuery(sqlQuery,values) {
    try {
        const result = await client.query(sqlQuery,values);
        console.log(result.command);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    connect,
    disconnect,
    executeQuery,
};