const jwt = require('jsonwebtoken');

function decodeBearerToken(token, salt) {
    try {
      const decoded = jwt.verify(token, salt);
      return decoded;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  
  module.exports = {
    decodeBearerToken
  };
  