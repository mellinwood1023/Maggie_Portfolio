// src/components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the current route's page */}
      </main>
      <Footer />
    </>
  );
}
