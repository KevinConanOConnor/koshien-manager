// src/components/TriggerInitButton.tsx
'use client';

import { useState } from 'react';

export default function TriggerInitButton() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleClick() {
    setStatus('Triggering...');
    try {
      const res = await fetch('/api/test/start', { method: 'POST' });
      const data = await res.json();
      setStatus(`Success: ${data.status}`);
    } catch (err) {
      setStatus('Error occurred');
      console.error(err);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Trigger Init
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
