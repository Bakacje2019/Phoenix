import { Request, Response } from 'express';
import fetch from 'node-fetch';

/**
 * Handle chat messages by forwarding them to the Python micro‑service.
 * In a real implementation you would route to the model router.
 */
export async function postChatMessage(req: Request, res: Response) {
  const { session_id, message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  try {
    const response = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id, message }),
    });
    const text = await response.text();
    res.status(200).json(text);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Chat service failed' });
  }
}