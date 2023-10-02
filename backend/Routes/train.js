const express = require('express');
const router = express.Router(); // Create an instance of Express router
const db = require('../db');
const fs = require('fs');

// Route: get trains running between A and B
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

router.get('/available', async (req, res) => {
    try {
        let query = `select t.trainno,t.tname,s1.stn as frcode,p1.name as frname,s1.timing as frtime,s2.stn as tocode,p2.name as toname,s2.timing as totime,t2.cls,t1.dt,t2.rate,t1.vacancy
        from train t
        inner join stops s1 on t.trainno=s1.tno
        inner join stops s2 on s1.tno=s2.tno
        inner join station p1 on p1.stn=s1.stn
        inner join station p2 on p2.stn = s2.stn
        inner join tktavailable t1 on t1.tno=s2.tno
        inner join tktrate t2 on t1.tno=t2.tno AND t1.cls=t2.cls
        and t2.fromstn=s1.stn and t2.tostn=s2.stn
        where  t1.dt='2023-10-21' and s1.stn='TCR' AND s2.stn='TVC' AND s1.distance < s2.distance;`;
        const data = await db.executeQuery(query);
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

router.get('/addtrains', async (req, res) => {
    try {
        const trainNumbers = [16344];
        let start = '2023-10-01';
        let end = '2023-10-31';
        let classes = ['SL', '3A', '2A'];
        let data3;
        trainNumbers.forEach(async (tno) => {
            for (let date = new Date(start); date <= new Date(end); date.setDate(date.getDate() + 1)) {
                const formattedDate = date.toISOString().slice(0, 10);
                classes.forEach(async (cls) => {
                    let vacancy = Math.floor(Math.random() * 100);
                    const sql = `INSERT INTO tktavailable VALUES (${tno}, '${formattedDate}', '${cls}', ${vacancy});`;
                    data3 = await db.executeQuery(sql);
                    console.log(data3);
                })
            }
        });
        res.json(data3)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

router.get('/stops', async (req, res) => {
    try {
        const jsonFilePath = '16344.json';
        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading JSON file: ${err}`);
                return;
            }
            try {
                const jsonObject = JSON.parse(data);
                jsonObject.forEach(async (item) => {
                    let query = `insert into stops values (${item.tno},'${item.stn}','${item.timing}',${item.distance})`;
                    const data = await db.executeQuery(query);
                })

            } catch (error) {
                console.error(`Error parsing JSON: ${error}`);
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})


router.get('/rates', async (req, res) => {
    try {
        const stations = ['TVC', 'QLN', 'KYJ', 'KTYM', 'ERN', 'TCR', 'PGT'];
        stnrev = stations.reverse();
        for (let i = 0; i < stations.length; i++) {
            let basefare = 80;
            let count = 0;
            for (let j = i + 1; j < stations.length; j++) {

                if (count <= 3) {
                    basefare = 700;
                }
                else {
                    basefare += 30;
                }
                let from = stations[i];
                let to = stations[j];
                let query = `insert into tktrate values (16344,'${from}','${to}','2A',${basefare})`;
                const data3 = await db.executeQuery(query);
                console.log(data3);
                count++;
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})


//ROUTE: add ticket details to DB
router.post('/newticket', async (req, res) => {
    try {
        const { tno, tname, } = req.body;
        let query = "SELECT *from train;";
        const data = await db.executeQuery(query);
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

//ROUTE: remove passengers from a PNR

module.exports = router;