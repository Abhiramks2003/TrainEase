const fs = require('fs');
const data = fs.readFileSync('output.json', 'utf-8');

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

// Convert the object intocode an array
const resultArray = Object.values(convertedData);

console.log(JSON.stringify(resultArray, null, 2));
