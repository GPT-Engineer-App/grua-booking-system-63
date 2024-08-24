const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../../file_modifications.log');

function logFileModification(filePath) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp}: File modified - ${filePath}\n`;
  
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = { logFileModification };