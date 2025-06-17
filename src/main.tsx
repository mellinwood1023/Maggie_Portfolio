import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';  // This is your top-level component

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* App is where your routing lives */}
  </React.StrictMode>
);
