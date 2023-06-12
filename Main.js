const fileUtil = require('./util/FileUtil');
const decoedeUtil = require('./util/DecodeUtil');

jsonContents = fileUtil.readJSONFile('./sample/token.json');
console.log(jsonContents);

const bearerToken = jsonContents['bearerToken'];
const salt = jsonContents['salt'];

const decodedToken = decoedeUtil.decodeBearerToken(bearerToken, salt);
console.log(decodedToken);