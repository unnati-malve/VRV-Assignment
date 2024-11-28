// import React from 'react';
// import { Container, Box, Grid, CssBaseline } from '@mui/material';
// import UserManagement from './components/UserManagement';
// import RoleManagement from './components/RoleManagement';
// import PermissionManagement from './components/PermissionManagement';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Navbar />
//       <Container maxWidth="lg" sx={{ marginTop: 4 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6}>
//             <UserManagement />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <RoleManagement />
//           </Grid>
//           <Grid item xs={12}>
//             <PermissionManagement />
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default App;


import React from 'react';
import UserContextProvider from './context/UserContext';
import RoleContextProvider from './context/RoleContext';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import './styles.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RoleContextProvider>
          <h1>Role-Based Access Control (RBAC) UI</h1>
          <UserManagement />
          <RoleManagement />
        </RoleContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
