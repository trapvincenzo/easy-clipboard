'use strict';

const Config = require('electron-config');
const config = new Config();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const ENCRYPT_CONFIG_KEY_NAME = 'encrypt-key';

let password = '';

if(config.has(ENCRYPT_CONFIG_KEY_NAME)) {
  password = config.get(ENCRYPT_CONFIG_KEY_NAME);
}

if('' === password) {
  const randomstring = require('randomstring');
  password = randomstring.generate(5);
  config.set(ENCRYPT_CONFIG_KEY_NAME, password);
}

module.exports.encrypt = (text) => {
  let cipher = crypto.createCipher(algorithm, password)
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');

  return crypted;
};

module.exports.decrypt = (text) => {
  let decipher = crypto.createDecipher(algorithm, password)
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8');

  return dec;
};

module.exports.hash = (text) => {
  return crypto.createHash('md5').update(text).digest('hex');
};
