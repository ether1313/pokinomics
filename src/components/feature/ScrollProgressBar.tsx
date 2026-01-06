import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
