const fs = require('fs');

// Read the text file
fs.readFile('demo.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	// Split the text into lines
	const lines = data.trim().split('\n');

	// Extract header row and split it into column names
	const headers = lines[0].split('|').map((header) => header.trim());

	// Initialize an array to store the JSON objects
	const jsonData = [];

	// Loop through each line starting from the second line (index 1)
	for (let i = 1; i < lines.length; i++) {
		const values = lines[i].split('|').map((value) => value.trim());

		// Create an object for each row and map headers to values
		const rowData = {};
		for (let j = 0; j < headers.length; j++) {	
			rowData[headers[j]] = values[j];
		}

		// Add the row object to the JSON array
		jsonData.push(rowData);
	}

	// Write the JSON data to a file
	fs.writeFileSync('trainSchedule2.json', JSON.stringify(jsonData.slice(1), null, 2));

	console.log('Table data saved as trainSchedule.json in a pretty JSON format.');
});
