import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroSearchBox from './components/HeroSection/HeroSearchBox';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen  bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500/30" dir="rtl">
        <Navbar />
        <main className='relative '>
          <HeroSection />
          <div className='absolute -bottom-10 w-full'>

        <HeroSearchBox />

          </div>

        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;