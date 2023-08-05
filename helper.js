const CryptoJS = require('crypto-js');

function encryptDataWithPassword(data, password) {
  const encryptedData = CryptoJS.AES.encrypt(data, password).toString();
  return encryptedData;
}

function decryptDataWithPassword(encryptedData, password) {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, password).toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

module.exports = {encryptDataWithPassword,decryptDataWithPassword}


