import { Request, Response } from 'express';

// Dummy in‑memory user store (replace with database calls).
const users: Record<string, { password: string }> = {};

export async function register(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (users[email]) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users[email] = { password };
  return res.status(201).json({ message: 'User registered' });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = users[email];
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  return res.status(200).json({ message: 'Logged in', token: 'dummy-token' });
}