import * as React from 'react';
import { createRoot } from 'react-dom/client';

function App(): React.ReactElement {
  return <h1>Hello, React + Vite + TypeScript!</h1>;
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
