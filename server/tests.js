const bcrypt = require('bcrypt');

async function testBcrypt() {
  const password = 'password';
  const hashedPassword = await bcrypt.hash(password, 10);

  const isMatch = await bcrypt.compare(password, hashedPassword);
}

testBcrypt();
