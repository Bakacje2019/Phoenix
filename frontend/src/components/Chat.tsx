import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    try {
      // Call the backend chat endpoint.  In a real implementation the base URL
      // would be configured via environment variables.
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: 'local', message: input }),
      });
      const data = await res.json();
      const assistantMessage: Message = { role: 'assistant', content: data || '(no response)' };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const assistantMessage: Message = { role: 'assistant', content: 'Error contacting backend.' };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border rounded-md p-4 bg-white shadow-sm">
      <div className="h-64 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.role === 'user'
                ? 'text-right text-blue-700'
                : 'text-left text-green-700'
            }
          >
            <span className="whitespace-pre-line">{msg.content}</span>
          </div>
        ))}
        {loading && <div className="italic text-gray-500">Assistant is typing…</div>}
      </div>
      <form onSubmit={sendMessage} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}