const fs = require('fs');
const shortid = require('shortid');

// Specify the file path
const filePath = 'docs.txt'; // Replace with the actual path to your text file

// Read the content of the text file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // The 'data' variable now contains the contents of the file
  // Assuming the entire content is a Base64 string, you can use it as needed
  const originalBase64 = data.trim(); // Trim any leading/trailing whitespace

  // Generate a unique ID using shortid
  const shortenedId = shortid.generate();

  //console.log(`Original Base64: ${originalBase64}`);
  console.log(`Shortened ID: ${shortenedId}`);

  // Now, you can use the originalBase64 and shortenedId as needed in the same script
});
