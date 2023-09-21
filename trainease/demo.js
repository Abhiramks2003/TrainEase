//generate PNR
// var unique = new Date().valueOf();
// var pnr = String(unique).substring(3, 13);
// console.log(pnr);

const curr = new Date();
const maxDate = new Date();
maxDate.setMonth(curr.getMonth() + 4);
const maxDateFormatted = maxDate.toISOString().split('T')[0];
console.log(maxDateFormatted);