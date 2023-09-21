const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();

// Connect to the database
db.connect();

// Middleware setup
app.use(cors());
app.use(express.json());

// Define and use routers
const authRouter = require('./Routes/auth');
const trainRouter = require('./Routes/train');
app.use('/api/auth', authRouter);
app.use('/api/train', trainRouter);

// Root route
app.get('/', (req, res) => {
    res.send("Rail Booking Server");
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
