import { createContext, useState, useEffect } from 'react';

export const Eventcontext = createContext();

// eslint-disable-next-line react/prop-types
export const EventProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(() => {
    const savedMode = localStorage.getItem('isdark');
    return savedMode === 'true'; 
  });

  const [isSpooky, setIsSpooky] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isdark;
    setIsdark(newMode);
    localStorage.setItem('isdark', newMode); 
  };
  const handlespookymode = () => {
    setIsSpooky(prev => !prev);
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-event', isSpooky ? 'Spooky' : '');
    document.documentElement.setAttribute('data-theme', isdark ? 'dark' : '');
    return () => {
      document.documentElement.removeAttribute('data-event');
      document.documentElement.removeAttribute('data-theme');
    };
  }, [isSpooky, isdark]);
  return (
    <Eventcontext.Provider value={{ isdark, toggleDarkMode, isSpooky, handlespookymode }}>
      {children}
    </Eventcontext.Provider>
  );
};