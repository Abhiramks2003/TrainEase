const fs = require('fs');

// Read the original JSON file
fs.readFile('trainSchedule2.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Transform the data as per your requirements
    const transformedData = jsonData.map((entry) => ({
        "tno": 16344,
        "stn": entry["Stn Code"].split(" ")[0],
        "timing": entry["Departs"] + ":00",
        "distance": parseInt(entry["Distance"] === "-" ? "0" : entry["Distance"].split(" ")[0], 10),
    }));

    // Convert the transformed data back to JSON and save it
    const transformedJSON = JSON.stringify(transformedData, null, 2);

    fs.writeFileSync('16344.json', transformedJSON);

    console.log('Transformed data saved as transformedTrainSchedule.json in a pretty JSON format.');
});
