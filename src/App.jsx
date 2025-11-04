import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      const shouldDark = stored === 'dark';
      setIsDark(shouldDark);
      document.documentElement.classList.toggle('dark', shouldDark);
    } else {
      // Respect prefers-color-scheme on first load
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefers);
      document.documentElement.classList.toggle('dark', prefers);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
      <Hero onToggleTheme={toggleTheme} />
      <main>
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
