import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{
      background: 'black',
      color: 'white',
      fontSize: '32px',
      padding: '40px'
    }}>
      ✅ REACT IS MOUNTING
      <br />
      Your app is running.
    </div>
  );
};

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(<App />);
