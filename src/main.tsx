import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './pages/Portfolio';

function App(): React.ReactElement {
  return <Portfolio />;
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
