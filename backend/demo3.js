const fs = require('fs');
const base64 = require('base64-js');

const inputVideoPath = 'import jav1.pdf'; // Replace with your input video file path
var base64Data = "";
const outputPath = 'docs.txt';
// Read the video file as binary data
fs.readFile(inputVideoPath, (err, data) => {
	if (err) {
		console.error(`Error reading the file: ${err}`);
		return;
	}

	// Encode the binary data as Base64
	base64Data = base64.fromByteArray(data);
	// You can now use base64Data as a Base64-encoded string
	console.log('File converted to Base64:');
	fs.writeFile(outputPath, base64Data, (err) => {
		if (err) {
			console.error(`Error writing to file: ${err}`);
			return;
		}
		console.log(`Text has been written to ${outputPath}`);
	})
});

