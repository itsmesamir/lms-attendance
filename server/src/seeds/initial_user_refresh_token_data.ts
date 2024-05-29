import { Knex } from 'knex';
import * as jwt from 'jsonwebtoken';

export async function seed(knex: Knex): Promise<void> {
  await knex('refresh_tokens').del();

  const users = await knex('users').select('id', 'email');

  const tokens = users.map((user) => ({
    user_id: user.id,
    token: generateToken(user),
    expiry_time: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Example: token expires in 30 days
    created_at: new Date(),
    invalidated_at: null
  }));

  await knex('refresh_tokens').insert(tokens);
}

function generateToken(user: any) {
  const secret =
    '539e682159d56e909fcff513b4cee93ca8a4987f4a2d78077c49a7dbbdc3b153';
  const token = jwt.sign(user, secret, { expiresIn: '30d' });

  return token;
}
