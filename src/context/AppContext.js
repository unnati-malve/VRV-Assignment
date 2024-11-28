import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
