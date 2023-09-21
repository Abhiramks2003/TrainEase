const express = require('express');
const router = express.Router(); // Create an instance of Express router
const db = require('../db');

// Route: /api/train/getrains
router.get('/gettrains', async (req, res) => {
    try {
        let query = "SELECT *from train;";
        const data = await db.executeQuery(query);
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

router.get('/getticket', async (req, res) => {
    try {
        let query = "select * from ticket;"
        const data = await db.executeQuery(query);
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

module.exports = router;