import { Request, Response } from 'express';
import {
  login,
  logout,
  refreshAccessToken,
  createUser
} from '../services/authService';

export async function refreshToken(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.jid;

    if (!refreshToken) {
      return res.status(401).json({ ok: false, accessToken: '' });
    }

    const accessToken = refreshAccessToken(refreshToken);

    res.json({ ok: true, accessToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ ok: false, accessToken: '' });
  }
}

export async function loginHandler(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const tokens = await login(email, password);
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
    res.json({ accessToken: tokens.accessToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid credentials' });
  }
}

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userId = await createUser(req.body);
    res.status(201).json({ userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export async function logoutUser(req: Request, res: Response) {
  try {
    const refreshToken = req?.body?.refreshToken || req?.cookies?.refreshToken;

    if (refreshToken) {
      await logout(refreshToken);
    }
  } catch (error) {
    console.error(error);
  } finally {
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');

    // res.status(200).json({ message: 'Logged out successfully' });
    res.redirect('/login');
  }
}
