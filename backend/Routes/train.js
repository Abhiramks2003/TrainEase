const express = require('express');
const router = express.Router(); // Create an instance of Express router
const db = require('../db');
const fetchuser = require('../Middleware/fetchuser');

router.get('/gettrains', fetchuser, async (req, res) => {
    try {
        let query = "SELECT *from train;";
        const data = await db.executeQuery(query);
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

// Route: get trains running between A and B
router.post('/available', async (req, res) => {
    try {
        const { from, to, date } = req.body;
        let query = `select t.trainno,t.tname,s1.stn as frcode,p1.name as frname,s1.timing as frtime,s2.stn as tocode,p2.name as toname,s2.timing as totime,t2.cls,t1.dt,t2.rate,t1.vacancy
        from train t
        inner join stops s1 on t.trainno=s1.tno
        inner join stops s2 on s1.tno=s2.tno
        inner join station p1 on p1.stn=s1.stn
        inner join station p2 on p2.stn = s2.stn
        inner join tktavailable t1 on t1.tno=s2.tno
        inner join tktrate t2 on t1.tno=t2.tno AND t1.cls=t2.cls
        and t2.fromstn=s1.stn and t2.tostn=s2.stn
        where  t1.dt='${date}' and s1.stn='${from}' AND s2.stn='${to}' AND s1.distance < s2.distance;`;
        const data = await db.executeQuery(query);
        console.log(data);
        const convertedData = {};

        data.forEach(item => {
            const { trainno, tname, frcode, frname, frtime, tocode, toname, totime, cls, dt, rate, vacancy } = item;

            if (!convertedData[trainno]) {
                convertedData[trainno] = {
                    trainno,
                    tname,
                    frcode,
                    frname,
                    frtime,
                    tocode,
                    toname,
                    totime,
                    dt,
                    classes: []
                };
            }

            convertedData[trainno].classes.push({
                cls,
                rate,
                vacancy
            });
        });
        const resultArray = Object.values(convertedData);
        res.json(resultArray);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }

})


//ROUTE: add ticket details to DB
router.post('/passenger', fetchuser, async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const values = Object.values(req.body);
        const placeholders = keys.map((key, index) => `$${index + 1}`).join(',');
        const insertQuery = `INSERT INTO ticket (${keys.join(',')}) VALUES (${placeholders})`;
        const insertPassengers = `insert into passengers `
        let d1 = await db.executeQuery(insertQuery, values);
        console.log(d1);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})


//ROUTE: remove passengers from a PNR
router.delete('/removepass/:pnr', fetchuser, async (req, res) => {
    try {
        const { data } = req.body;
        const names = data.map((name) => `'${name}'`).join(',');
        console.log(names);
        let query = `delete from passenger where pnr=${req.params.pnr} and name in (${names});`;
        let dl = await db.executeQuery(query);
        res.json(dl);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;  