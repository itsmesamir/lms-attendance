import { hash, compare } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await hash(password, saltRounds);
}

export async function validatePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  if (!password || !hashedPassword) {
    console.error('Password or hashedPassword is missing:', {
      password,
      hashedPassword
    });
    throw new Error('Password and hashedPassword are required for validation');
  }

  return await compare(password, hashedPassword);
}
