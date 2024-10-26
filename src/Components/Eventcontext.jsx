import { createContext, useState } from 'react';

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

  return (
    <Eventcontext.Provider value={{ isdark, toggleDarkMode, isSpooky, handlespookymode }}>
      {children}
    </Eventcontext.Provider>
  );
};