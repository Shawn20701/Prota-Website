/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const Eventcontext = createContext();

export const EventProvider = ({ children }) => {
  const [isdark, setIsdark] = useState(false);

  const toggleDarkMode = () => {
    setIsdark(prev => !prev);
  };

  return (
    <Eventcontext.Provider value={{ isdark, toggleDarkMode }}>
      {children}
    </Eventcontext.Provider>
  );
};
