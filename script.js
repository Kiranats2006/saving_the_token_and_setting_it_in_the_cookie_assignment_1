const jwt = require('jsonwebtoken');
const SECRET_KEY = "SECRET_KEY";

const encrypt = (payload) => {
  // encrypt the payload and return token
  try {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  } catch (error) {
    console.error("Encryption Error:", error);
    return null;
  }
}

const decrypt = (token) => {
  // return decoded payload
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Decryption Error:", error);
    return null;
  }
}
const payload = { user: "Alice", role: "admin" };
const token = encrypt(payload);
console.log("Encrypted Token:", token);

const decryptedPayload = decrypt(token);
console.log("Decrypted Payload:", decryptedPayload);

module.exports = {
  encrypt,
  decrypt
}
