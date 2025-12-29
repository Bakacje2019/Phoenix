import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { session_id, message } = req.body;
    // Forward the chat message to the Python micro‑service.  Here we assume
    // the service is running on http://localhost:8000/chat; adjust the URL
    // according to your deployment.  Since this is a skeleton, we'll
    // simply call the analyse endpoint with the message for demonstration.
    const response = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id, message }),
    });
    const text = await response.text();
    res.status(200).json(text);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to communicate with chat service' });
  }
}