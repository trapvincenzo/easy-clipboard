const path = require('path');
const fs = require('fs');
const {app} = require('electron');
const dumpFilename = path.join(app.getPath('userData'), 'data');
const endOfLine = require('os').EOL;
const CryptoUtil = require('../lib/CryptoUtil');

const encodeElement = (element) => {
  return CryptoUtil.hash(element.name + element.content) + '|~' +
    CryptoUtil.encrypt(element.name) + '|~' +
    CryptoUtil.encrypt(element.content) + endOfLine;
};

const read = (calback) => {
  fs.readFile(dumpFilename, 'utf8' ,(err, data) => {
    var decoded = [];

    if (!err && 0 < data.length) {
      var splittedData = data.split(endOfLine);
      splittedData.forEach((value) => {
        if (value.length > 0) {
            var splitValue = value.split('|~');
            decoded.push([CryptoUtil.decrypt(splitValue[0]), CryptoUtil.decrypt(splitValue[1]), CryptoUtil.decrypt(splitValue[2])]);
        }
      });
    }
    calback(decoded);
  });
};

module.exports.read = read;

module.exports.save = (name, content, cb) => {
  const textToWrite = encodeElement({name, content});

  fs.appendFile(dumpFilename, textToWrite, function (err) {
    cb();
  });
};

module.exports.delete = (hash, callback) => {
  read(function (decoded) {
    let found = false;
    const filtered = decoded.filter((element) => {
      if (!found) {
        if(element[0] === hash) {
          found = true;
          return false;
        }
      }
      return true;
    });

    let toSave = [];
    filtered.forEach((element) => toSave.push(encodeElement({hash: element[0], name: element[1], content: element[2]})));

    fs.writeFile(dumpFilename, toSave.join(''), () => {
      callback(null);
    });
  });
};
