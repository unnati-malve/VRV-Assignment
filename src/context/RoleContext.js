// import React, { createContext, useState } from 'react';

// export const RoleContext = createContext();

// export const RoleProvider = ({ children }) => {
//   const [roles, setRoles] = useState([]);

//   return (
//     <RoleContext.Provider value={{ roles, setRoles }}>
//       {children}
//     </RoleContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RoleContext = createContext();

const RoleContextProvider = (props) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/roles')
      .then(res => setRoles(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <RoleContext.Provider value={{ roles, setRoles }}>
      {props.children}
    </RoleContext.Provider>
  );
}

export default RoleContextProvider;
