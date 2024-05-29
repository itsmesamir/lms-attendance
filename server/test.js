// // generateSecret.js
// const crypto = require('crypto');

// // Generate a secure random secret of 32 bytes
// const secret = crypto.randomBytes(32).toString('hex');

// console.log(secret);

const jwt = require('jsonwebtoken');

// Secret key
// const secret =
//   '6116597a7188021912f263244f844f7671281ce52d2e0f2ce8817ad33a0cac2e';

// refresh token secret key
const secret =
  '539e682159d56e909fcff513b4cee93ca8a4987f4a2d78077c49a7dbbdc3b153';
// Example payload
const payload = {
  user_id: 1,
  username: 'john.doe@example.com'
};

console.log({ jwt });
// Generate a token
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

const verify = jwt.verify(token, secret);
console.log({ verify });

console.log({ token });
