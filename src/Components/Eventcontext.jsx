import { createContext, useState, useEffect } from 'react';

export const Eventcontext = createContext();

// eslint-disable-next-line react/prop-types
export const EventProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(() => {
    const savedMode = localStorage.getItem('isdark');
    return savedMode === 'true'; 
  });
  const [eventMode, setEventMode] = useState('');

  const toggleDarkMode = () => {
    const newMode = !isdark;
    setIsdark(newMode);
    localStorage.setItem('isdark', newMode); 
  };
  const setSpookyMode = () => {
    setEventMode(prev => (prev === 'Spooky' ? '' : 'Spooky'));
  };

  const setWinterMode = () => {
    setEventMode(prev => (prev === 'Winter' ? '' : 'Winter'));
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-event', eventMode);
    document.documentElement.setAttribute('data-theme', isdark ? 'dark' : '');
    return () => {
      document.documentElement.removeAttribute('data-event');
      document.documentElement.removeAttribute('data-event');
      document.documentElement.removeAttribute('data-theme');
    };
  }, [eventMode, isdark]);
  return (
    <Eventcontext.Provider value={{ isdark, toggleDarkMode, eventMode, setSpookyMode, setWinterMode }}>
      {children}
    </Eventcontext.Provider>
  );
};