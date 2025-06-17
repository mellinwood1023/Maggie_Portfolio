import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';  // This is your top-level component      // Optional global styles
import './styles/global.css'; // Assuming you have a global CSS file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* App is where your routing lives */}
  </React.StrictMode>
);
