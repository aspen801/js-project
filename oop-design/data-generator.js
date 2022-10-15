import * as fs from 'fs';

fs.readFile('./data.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const data = JSON.parse(jsonString);
  let resultString = 'export const countries = [\n';
  for (const item in data) {
    if (data[item].length < 20) {
      for (let i = 0; i < data[item].length; i++) {
        resultString = resultString.concat(`    {name: '${data[item][i]}', country: '${item}'},\n`);
      }
    }
  }
  resultString = resultString.concat(']');
  fs.writeFile('./country-city-list.js', resultString, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
});
