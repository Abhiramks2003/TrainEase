const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Abhiram Krishna S";
const db = require('../db');
let success = false;
//SIGNUP
router.post('/signup', async (req, res) => {
    const { userid, name, dob, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let query = `select * from user
                    where email=${email};`
        let user = await db.executeQuery(query);
        if (user) {
            return res.status(400).json({ success, error: "Sorry,a user with same email already exists" });
        }
        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(password, salt);
        let insertQuery = `insert into user values
                ('${userid}','${name}','${dob}','${email}','${secPass}');`
        let ins = await db.executeQuery(insertQuery);
        const data = {
            user: {
                id: userid
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let query = `select * from user where email=${email};`
        let user = await db.executeQuery(query);
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = router