/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const Eventcontext = createContext();

export const EventProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(() => {
    const savedMode = localStorage.getItem('isdark');
    return savedMode === 'true'; 
  });
  const toggleDarkMode = () => {
    const newMode = !isdark;
    setIsdark(newMode);
    localStorage.setItem('isdark', newMode); 
  };

  return (
    <Eventcontext.Provider value={{ isdark, toggleDarkMode }}>
      {children}
    </Eventcontext.Provider>
  );
};
