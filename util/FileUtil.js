const fs = require('fs');

function readJSONFile(filename, callback) {
    const jsonFile = fs.readFileSync(filename, 'utf8');
    const jsonData = JSON.parse(jsonFile);
    return jsonData;
}

module.exports = {
  readJSONFile
};
