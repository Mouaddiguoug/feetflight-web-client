// lib/auth/verifyToken.ts
import { UserData } from '@/pages';
import jwt from 'jsonwebtoken';

const SECRET = process.env.NEXT_PUBLIC_SECRET_KEY!;

export async function verifyAuthToken(token: string): Promise<UserData> {
  try {
    const decoded = jwt.verify(token, SECRET) as UserData;
	console.log(decoded)
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
}
