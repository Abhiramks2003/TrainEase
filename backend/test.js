const data = [
    {
        "tno": 12076,
        "cls": "2S",
        "rate": 160
    },
    {
        "tno": 12082,
        "cls": "2S",
        "rate": 160
    },
    {
        "tno": 16604,
        "cls": "SL",
        "rate": 270
    },
    {
        "tno": 16347,
        "cls": "SL",
        "rate": 270
    },
    {
        "tno": 16347,
        "cls": "3A",
        "rate": 600
    },
    {
        "tno": 16347,
        "cls": "2A",
        "rate": 820
    },
    {
        "tno": 16604,
        "cls": "2A",
        "rate": 820
    },
    {
        "tno": 16604,
        "cls": "3A",
        "rate": 600
    },
    {
        "tno": 12076,
        "cls": "CC",
        "rate": 450
    },
    {
        "tno": 12082,
        "cls": "CC",
        "rate": 450
    }
]

const convertedData = {};
// Iterate through the initial JSON and populate the convertedData object
data.forEach(item => {
    const { tno, cls, rate } = item;

    if (!convertedData[tno]) {
        convertedData[tno] = {
            tno: tno,
            classes: []
        };
    }

    convertedData[tno].classes.push({
        class: cls,
        rate: rate
    });
});

// Convert the object into an array
const resultArray = Object.values(convertedData);

for (let i = 0; i < resultArray.length; i++) {
    const element = resultArray[i];
    console.log(element);
}

//console.log(JSON.stringify(resultArray, null, 2));