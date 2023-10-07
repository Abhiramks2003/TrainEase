const express = require('express');
const router = express.Router(); // Create an instance of Express router
const db = require('../db');

router.get('/gettrains', async (req, res) => {
    try {
        let query = "SELECT *from train;";
        const data = await db.executeQuery(query);
        res.json({ command: data.command, rows: data.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

// Route: get trains running between A and B
router.get('/available', async (req, res) => {
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
        const convertedData = {};

        data.rows.forEach(item => {
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
router.post('/passenger', async (req, res) => {
    try {

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//ROUTE: remove passengers from a PNR
router.delete('/removepass/:pnr', async (req, res) => {
    try {
        const { data } = req.body;
        let query = `delete from passenger;`;
        let dl = await db.executeQuery(query, data);
        console.log(req.params.pnr);
        res.json(dl);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;

