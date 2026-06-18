import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500/30" dir="rtl">
        <Navbar />
        <main>
          <HeroSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;