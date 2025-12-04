import React from 'react';
import ReactDOM from 'react-dom/client';

const Test = () => (
  <div style={{
    background: '#020617',
    color: 'white',
    fontSize: 28,
    padding: 50
  }}>
    ✅ REACT BOOTED SUCCESSFULLY
  </div>
);

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root not found');
}

ReactDOM.createRoot(root).render(<Test />);
