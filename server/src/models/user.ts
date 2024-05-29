import db from '../db';
import { User } from '../interfaces/user';

export const findByEmail = (email: string): Promise<User | null> => {
  return db<User>('users').where({ email }).first() as Promise<User | null>;
};

export const findAll = (): Promise<User[]> => {
  return db<User>('users');
};

export const registerUser = (user: User): Promise<number> => {
  return db<User>('users')
    .insert(user)
    .then((ids) => ids[0]);
};

// export const findByToken = (token: string): Promise<User | null> => {
//   // Implement logic to find a user by token
//   // This could involve checking a table of active tokens
//   return Promise.resolve(null);
// };

export const findById = (id: number): Promise<User | null> => {
  return db<User>('users')
    .where({ id })
    .first()
    .then((result) => result || null);
};

export async function findByToken(token: string): Promise<any> {
  return db<any>('refresh_tokens').where({ token }).first();
}

export async function invalidateToken(id: number): Promise<void> {
  await db('refresh_tokens')
    .where({ id })
    .update({ invalidated_at: new Date() });
}
