const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "abhiram@psql2023",
    database: "postgres"
})

async function connect() {
    await client.connect();
    console.log('Connected to PostgreSQL database');
}

async function disconnect() {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
}

async function executeQuery(sqlQuery) {
    try {
        const result = await client.query(sqlQuery);
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